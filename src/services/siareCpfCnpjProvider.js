'use strict'

import fetch from 'node-fetch'
import ServiceError from '../errors/service.js'
import cheerio from 'cheerio';

const siareCpfCnpjProvider = async (cpfCnpj) => {
  // Consult CNPJ at Siare
  return await fetch("https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/NFAE/SERVICO_027", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    "referrer": "https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/NFAE/SERVICO_027",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `ACAO=PROCURAR&unifwScrollTop=0&unifwScrollLeft=448&txtIndicadorUC=Requerer+NFA&numeroAbaAnterior=2&tipoDestinatario.identificador=4&produtorRuralLogado=false&tipoRequerente.desRequerente=Pessoa+Jur%EDdica+N%E3o+Inscrita&tipo.descricao=Sa%EDda&circulacao.desCirculacao=Interna&operacaoRequerimentoNFASimplificado=false&remetente.cpfCnpj=${cpfCnpj}&remetente.ie=&remetente.nome=&remetente.cpfResponsavel=&remetente.foneFax=&remetente.email=&enderecoRemetente.cep=&enderecoRemetente.pais=&enderecoRemetente.uf=&enderecoRemetente.idMunicipio=&enderecoRemetente.municipio=&enderecoRemetente.distrito=&enderecoRemetente.bairro=&enderecoRemetente.tipoLogradouro=&enderecoRemetente.logradouro=&enderecoRemetente.numero=&enderecoRemetente.complemento1=&destinatario.cpfCnpj=&destinatario.ie=&destinatario.nome=&destinatario.foneFax=&enderecoDestinatario.cep=&enderecoDestinatario.pais=&enderecoDestinatario.uf=&enderecoDestinatario.idMunicipio=&enderecoDestinatario.municipio=&enderecoDestinatario.distrito=&enderecoDestinatario.bairro=&enderecoDestinatario.tipoLogradouro=&enderecoDestinatario.logradouro=&enderecoDestinatario.numero=&enderecoDestinatario.complemento1=&destinatario.tipoIdentificadorIeDestinatario.id=1&idMunicipioInicioTransp=&dsMunicipioInicioTransp=`,
    "method": "POST",
    "mode": "cors"
  })
    .then(parseResponse)
    .then(extractValuesData)
    .catch(throwApplicationError)
}

const parseResponse = (res) => {
  if (res.ok === false || res.status !== 200) {
    throw new Error(`CPF/CNPJ não encontrado na base do Siare.`)
  }

  return res.text()
}

const extractValuesData = (res) => {
  const $ = cheerio.load(res);
  const tr1 = $('div.boxConteudo table').eq(2);
  const dataCheerio = $(tr1).find('tr:nth-child(3)  td:nth-child(2) span span').html();

  if (dataCheerio) {
    const tr2 = $('div.boxConteudo table').eq(3);

    const data = {
      name: dataCheerio.trim(),
      fantasy: dataCheerio.trim(),
      cep: $(tr2).find('tr:nth-child(2) td:nth-child(2) span span').html(),
      state: $(tr2).find('tr:nth-child(3) td:nth-child(2) span span').html(),
      city: $(tr2).find('tr:nth-child(3) td:nth-child(4) span span').html(),
      neighborhood: ($(tr2).find('tr:nth-child(5) td:nth-child(2) span span').html()).trim(),
      street: ($(tr2).find('tr:nth-child(6) td:nth-child(2) span span').html() + ' ' + $(tr2).find('tr:nth-child(6) td:nth-child(4) span span').html()).trim(),
      streetnumber: ($(tr2).find('tr:nth-child(6) td:nth-child(5) span:nth-child(2) span').html()).trim(),
      complement: ($(tr2).find('tr:nth-child(7) td:nth-child(2) span span').html()).trim(),
      phone: '',
      mail: '',
      service: 'siare',
    }

    return data;
  } else {
    throw new Error(`CPF/CNPJ não encontrado na base de dados do Siare.`)
  }
}

const throwApplicationError = (error) => {
  const serviceError = new ServiceError({
    message: error.message,
    service: 'siare'
  })

  if (error.name === 'FetchError') {
    serviceError.message = 'Erro ao se conectar com o site Siare.'
  }

  throw serviceError
}

export default siareCpfCnpjProvider;
