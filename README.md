[![Build Status](https://travis-ci.org/luperciofferraz/dscatalog.svg?branch=main)](https://travis-ci.org/luperciofferraz/dscatalog)

# dscatalog

Sistema, ainda em desenvolvimento, de um catálogo de Produtos e suas respectivas Categorias.

O projeto está subdividido da seguinte forma:

- Front-Web: corresponde ao Front-End da aplicação, desenvolvido em React.
- Front-Mobile: corresponde ao projeto Mobile, desenvolvido em React Native (Ainda não disponível)
- Back-end: corresponde ao Back-End do projeto, desenvolvido em Spring Boot (Java).

Desenvolvido utilizando Spring Boot, o Back-End do projeto foi concebido utilizando as melhores práticas em arquitetura de API java, sendo dividido nas seguintes camadas:

- Resource:  Classes de Endpoints, onde são recebidas as requisições dos usuários.
- DTO: Classes que montam o conteúdo e o formato das informações que serão trafegadas entre o Cliente e o Servidor, trazendo os seguintes benefícios.
   1) Recebimento e envio somente da informação necessária.
   2) Evitando o contato direto à camada de acesso ao Banco de Dados e seu contexto de persistência.
   3) Enviando respostas ao cliente em um formato padronizado e amigável.
- Repository: Camada de Acesso aos dados, padrão Repository do Spring Boot.
- Entity: Classes de Entidades do Banco de Dados
- Service: Classes de Serviços quem fazem o 'meio-de-campo' entre as Classes Resource e Repository. 

