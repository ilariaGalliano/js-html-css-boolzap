/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // My account
        user: {
            name: 'Ilaria',
            avatar: '_io'
        },
        // Contacts list
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                lastAccess : '10:35',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                lastAccess : '10:35',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                lastAccess : '10:35',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                lastAccess : '10:35',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        indexUser: 0,
        newChat : '',
        searchUser: '',
        randomText: [
          'Ciao!',
          'come stai?',
          'Usciamo',
          'Andiamo!',
          'Devo studiare',
          'Non posso',
          'ok'
        ]
    },

    methods: {

      orderUser(index){
        this.indexUser = index;
      },

      // Add new messages
      insertNewChat(){
        if (this.newChat.trim() !== '') {
          this.contacts[this.indexUser].messages.push({
             date: dayjs().format( 'DD/MM/YYYY HH:mm:ss' ),
             message: this.newChat.trim(),
             status: 'sent'
         });
         // to clean input
          this.newChat = '';
         // set Timeout 1s
          setTimeout(this.newMessage, 1000);
        }
      },

      // Auto reply
      newMessage(){
        this.contacts[this.indexUser].messages.push({
           date: dayjs().format( 'DD/MM/YYYY HH:mm:ss' ),
           message: this.randomText[Math.floor(Math.random() * 7)],
           status: 'received'
       })
        this.contacts[this.indexUser].lastAccess = dayjs().format('HH:mm:ss')
     },

     // Find my contacts by letters
     findContacts (){
      this.contacts.forEach(element =>{

        if (element.name.toLowerCase().includes(this.searchUser.toLowerCase())) {
          element.visible = true
        }
        else{
           element.visible = false
        }
      });
    },

    // Delete my messages
    deleteText(index) {
        this.contacts[this.indexUser].messages.splice(index, 1);
       },

  }
});
