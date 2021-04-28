const app = new Vue({
    el: '#app',
    data: {
        //Utente / io
       user:{ 
               name:'Franco',
               avatar:'_8',
       },
        arraycontact: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
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
      
        activeContact:0,
        newMessage: '',
        searchContact:'',
        visible: true,
    },
    methods: {
        setActiveContact(index) {
            console.log(index);

            this.activeContact = index;

            console.log(this.arraycontact[this.activeContact]);
        }, 
        addMessage(activeContact) {
            console.log('add new message');

            if(this.newMessage !== '') {
                this.arraycontact[this.activeContact].messages.push({

                    message: this.newMessage,
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    status:'sent',
                });
               this.newMessage = '';
               this.$refs.messageInput.focus();
            }
            this.newMessage = '';
            setTimeout(() => {
                this.arraycontact[activeContact].messages.push({
                    message: 'ok',
                    status: 'received',
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                });
            }, 1000);
        } ,
        search(){
            
            this.arraycontact.forEach((element) => {

                let nameContact = this.searchContact.toLowerCase().trim();

               if(!element.name.toLowerCase().trim().includes(nameContact)){
                   console.log(element.visible)
                   element.visible = false
               } else {
                  // element.visible = true;
               };
            })
        },
    }, 
   
});