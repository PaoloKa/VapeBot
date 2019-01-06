module.exports = {
    name: 'detect',
    description: 'detects face',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a message to say.';
        }
        let imageurl = args[0];

        let formData = {
          api_key: message.client.config.face_token,
          api_secret: message.client.config.face_secret,
          image_url: imageurl,
          return_attributes: "gender,age,smiling,emotion,ethnicity,beauty"
        };
        let faceurl = `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${formData.api_key}&api_secret=${formData.api_secret}&image_url=${formData.image_url}&return_attributes=${formData.return_attributes}`;
        message.client.request.post({
          url: faceurl
        },
      function (err, httpResponse, body){
        console.log(`ERROR: ${err}`);
        console.log(`BODY: ${body}`);
        var jsonObj = JSON.parse(body);
        var detectInfo = jsonObj.faces[0].attributes;
        message.channel.send({embed: {
          color: 3447003,
          author: {
            name: message.client.user.username,
            icon_url: message.client.user.avatarURL
            },
            title: "**WAHLE KOP HAHAHAHAHAHAHAHHA**",
            description: "*[Face Detection API from Face++](https://www.faceplusplus.com/)*",
            fields: [{
                name: "Emotions",
                value: `Neutraal: ${detectInfo.emotion.neutral}%\n Boos: ${detectInfo.emotion.anger}%\n Blij: ${detectInfo.emotion.happiness}%\n Bang: ${detectInfo.emotion.fear}%\n Droevig: ${detectInfo.emotion.sadness}%\n Gedegouteerd: ${detectInfo.emotion.disgust}%\n Verrasd: ${detectInfo.emotion.surprise}%`
              },
              {
                name: "Beauty Score (Hoe hoger hoe beter)",
                value: `**Hoe mooi mannen je vinden (op 100)**: ${detectInfo.beauty.male_score}\n **Hoe mooi vrouwen je vinden (op 100)**: ${detectInfo.beauty.female_score}`
              },
              {
                name: "Informatie",
                value: `Wiejow gij bent een **${detectInfo.gender.value}**. \n Tsjalie oude rat, gij bent **${detectInfo.age.value}** jaar oud.\n Inshallah broer, uw ras is: **${detectInfo.ethnicity.value}**.`
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.client.user.avatarURL,
              text: "© Johnny"
            }
          }
        });
      })
    },
}
