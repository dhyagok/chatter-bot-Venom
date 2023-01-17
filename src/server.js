import { create } from 'venom-bot';
import { stages, getStage } from './stages.js';

create({
    session: 'store',
    multidevice: true,
    headless: false,
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


function start(client) {
    client.onMessage((message) => {
       if (!message.isGroupMsg) {
//           const currentStage = getStage({ from: message.from });

//           const messageResponse = stages[currentStage].stage.exec({
//             from: message.from,
//             message: message.body,
//             client,
//           });
  
//           if (messageResponse) {
//             client.sendText(message.from, messageResponse).then(() => {
//               console.log('Message sent.');
//             }).catch(error => console.error('Error when sending message', error));
//           }
//       }
//     });

    switch (message.text) {
        case '1':
          client.sendText(message.from, "Oi").then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));
          client.sendVoice(message.from, './Gravação.mp3').then((result) => {
            console.log('Result: ', result); //return object success
          })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
          break;

        case '2':
          ('Send Messages.');  ('Buttons Reply');
          const buttons = [
            {
              "buttonText": {
                "displayText": "Text of Button 1"
              }
            },
            {
              "buttonText": {
                "displayText": "Text of Button 2"
              }
            }
          ]
          client.sendButtons(message.from, 'Title', buttons, 'Description')
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });

          break;

        case '3':
          -12.949511321019754, -38.4959630597929
          client.sendLocation(message.from, '-12.949389113882315', '-38.496163693695955', 'Brasil')
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
          break;

        case '4':
          client
            .sendLinkPreview(
              message.from,
              'https://www.linkedin.com/in/dyego-santos-79a1a31b0/',
              'Meu perfil do Linkedin'
            )
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
          break;


        case '5':
          client
            .sendImage(
              message.from,
              './kiko.jpg',
              'image-name',
              'Kikko da Bahia!'
            )
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
          break;

        case '6':
          client
            .sendFile(
              message.from,
              './curriculo.pdf',
              'file_name',
              'Vou te mandar o meu CV em pdf, dá uma olhada!'
            )
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
          break;

        case '7':
          client.setProfileStatus('K-Bot - Tô on! Manda ver! ✈️');
          client.sendText(message.from, "Status do perfil alterado!").then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));
          break;

        case '8':
          client.setProfileStatus('K-Bot - Estamos fechados!!! abriremos amanhã as 9h horas!');
          client.sendText(message.from, "Status do perfil alterado!").then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));
          break;

        case '9':
          client.setProfilePic('./aberto.jpeg');
          client.sendText(message.from, "Foto de perfil aberto").then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));
          break;

        case '10':
          client.setProfilePic('./fechado.jpg');
          client.sendText(message.from, "Foto do perfil fechado").then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));
          break;



        default:
          var menu = '👋 Olá, como vai? \n\nEu sou o K-Bot, o *assistente virtual* do Kikko. \n*Posso te ajudar?* 🙋‍♂️ \n *Escolha uma opção de 1 a 10* \n-----------------------------------\n1 - ```ENVIE AUDIO``` \n2 - ```MANDE BOTÕES```\n3 - ```LOCALIZAÇÃO```\n4 - ENVIE UM LINK\n5 - ENVIE UMA IMAGEM\n6 - ENVIE UM PDF\n7 - TROQUE O STATUS DO MEU PERFIL\n8 - VOLTE O STATUS DO MEU PERFIL\n9 - FOTO PERFIL ABERTO\n10 - FOTO PERFIL FECHADO - ```FALAR COM ATENDENTE - 0```';
          client.sendText(message.from, menu).then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));




          break;
            }
       }
    });
  };

      