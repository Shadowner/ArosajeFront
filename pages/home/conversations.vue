<script lang="ts" setup>
import { MESSAGE_STATUS } from '../../types/MESSAGE_STATUS';
definePageMeta({
    layout: 'home'
});

const seeUser = ref(false);

const messages = [
    {
        content: 'Salut',
        sender: 'Jean Michel',
        time: new Date(),
        status: MESSAGE_STATUS.DELIVERED,
    },
    {
        content: "Qu'est-ce que tu veux... je t'avais demandé de ne plus me parler",
        sender: 'Gertrude',
        time: new Date(),
        status: MESSAGE_STATUS.SEEN,
        seen: new Date(),
        isMine: true,
    },
    {
        content: "Je sais que je t'ai dit de ne plus te parler, mais j'ai vraiment besoin de ton aide. Mon chat s'est coincé dans l'arbre et je n'arrive pas à le faire descendre. Je sais que tu es doué avec les échelles, s'il te plaît viens m'aider.",
        sender: 'Jean Michel',
        time: new Date(),
        status: MESSAGE_STATUS.SENT,
    },
    {
        content: "Oh mon Dieu, Jean Michel ! Comment est-ce que ton chat a réussi à se coincer dans un arbre ? C'est vraiment stupide ! Bon, d'accord, je vais venir t'aider, mais tu me dois une grosse faveur après ça, compris ?",
        sender: 'Gertrude',
        time: new Date(),
        status: MESSAGE_STATUS.DELIVERED,
        isMine: true,
    },

    {
        content: "Merci, Gertrude, tu es vraiment géniale ! Je ne sais pas comment il a fait ça, il est plutôt maladroit. Mais promis, je te devrai une énorme faveur. Tu ne le regretteras pas, j'en suis sûr !",
        sender: 'Jean Michel',
        time: new Date(),
        status: MESSAGE_STATUS.DELIVERED,
        seen: new Date(),

    },

    {
        content: "Ça vaudrait mieux, Jean Michel. J'arrive dans 10 minutes. En attendant, ne fais rien de stupide, d'accord ?",
        sender: 'Gertrude',
        time: new Date(),
        status: MESSAGE_STATUS.SEEN,
        seen: new Date(),
        isMine: true,
    },

    {
        content: "Promis, Gertrude ! Je vais juste essayer de convaincre le chat de descendre tout seul en lui parlant avec ma voix aiguë de bébé. C'est une technique infaillible, tu sais !",
        sender: 'Jean Michel',
        time: new Date(),
        status: MESSAGE_STATUS.SENT,
    },
    {
        content: "Arrête immédiatement, Jean Michel ! Parler avec une voix aiguë de bébé ne va pas aider ton chat à descendre de l'arbre. Tu vas juste passer pour un idiot et effrayer davantage le pauvre animal ! Attends mon arrivée, s'il te plaît.",
        sender: 'Gertrude',
        time: new Date(),
        status: MESSAGE_STATUS.SENT,
        isMine: true,
    },

    {
        content: "Et ne t'avise pas d'essayer des astuces stupides que tu aurais trouvées sur Internet ! Je ne veux pas avoir à te sauver en plus de ton chat. Sois patient, j'arrive bientôt !",
        sender: 'Gertrude',
        time: new Date(),
        status: MESSAGE_STATUS.SENT,
        isMine: true,
    },


]

const lastMessage = messages[messages.length - 1];

</script>

<template>
    <div class="flex flex-col h-full w-full rounded-xl">
        <div class="flex w-full h-[8%]">
            <div class="bg-neutral-focus w-1/5 flex items-center justify-center">
                <h1 class="text-xl font-bold text-accent">Mes Conversations</h1>
            </div>
            <div class="flex-1 bg-neutral flex items-center justify-between">
                <div class="flex px-4 items-center justify-between">
                    <h1 class="font-bold text-accent text-xl mr-5">Jean Michel </h1>
                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                </div>
                <div class="flex px-5">
                    <font-awesome-icon class="cursor-pointer" size="lg" :icon="['fas', 'users']"
                        @click="seeUser = !seeUser" />
                </div>
            </div>
        </div>
        <div class="flex w-full h-[92%] ">
            <div class=" flex w-1/5 bg-base-content flex-col">
                <ConversationEntity :conv="{
                        user: 'Jean Michel',
                        lastMessage: lastMessage.content,
                        avatarURL: 'https://picsum.photos/200',
                    }" selected />

                <ConversationEntity :conv="{
                        user: 'Bertrand Amant',
                        lastMessage: 'J\'te bèse',
                        avatarURL: 'https://picsum.photos/202',
                    }" />
            </div>
            <div class="flex flex-col justify-between bg-base-200 flex-1 ">
                <div class="flex overflow-auto">
                    <div class="flex flex-1 flex-col p-3 overflow-auto">
                        <Message v-for="message in messages" :message="message" />
                    </div>
                    <div class="flex flex-col transition-all  w-0 overflow-hidden" :class="{
                            'min-w-[18%]': seeUser,
                            'min-w-0': !seeUser,
                        }">
                        <ConversationUser :user="{
                                avatarURL: 'https://picsum.photos/200',
                                username: 'Jean Michel',
                                online: false,
                            }" />

                        <ConversationUser :user="{
                                avatarURL: 'https://picsum.photos/201',
                                username: 'Gertrude',
                                online: true,
                            }" />
                    </div>
                </div>

                <div class="flex sticky bottom-0 w-full p-2 space-x-4 bg-base-300">
                    <input type="text" class="flex-1 border-none rounded-xl p-3 text-black"
                        placeholder="Votre message..." />
                    <button class="btn">Envoyer</button>
                </div>
            </div>
        </div>
    </div>
</template>
