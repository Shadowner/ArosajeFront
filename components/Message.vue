<script lang="ts" setup>
import { MESSAGE_STATUS } from '~/types/MESSAGE_STATUS';

defineProps<{
    message: {
        content: string,
        sender: string,
        time: Date,
        status: MESSAGE_STATUS,
        seen?: Date
        isMine?: boolean
    },
}>();

//TODO: add Image 
</script>

<template>
    <div v-if="!message.isMine" class="chat chat-start">
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
                <img src="https://picsum.photos/200" />
            </div>
        </div>
        <div class="chat-header">
            {{ message.sender }}
            <time class="text-xs opacity-50">{{ message.time.toLocaleTimeString() }}</time>
        </div>
        <div class="chat-bubble">{{ message.content }}</div>
        <div class="chat-footer opacity-50">
            {{ message.status === MESSAGE_STATUS.SENT ? 'Sent' : message.status === MESSAGE_STATUS.DELIVERED ? 'Delivered' :
                '' }}
        </div>
    </div>
    <div v-else class="chat chat-end">
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
                <img src="https://picsum.photos/201" />
            </div>
        </div>
        <div class="chat-header">
            {{ message.sender }}
            <time class="text-xs opacity-50">{{ message.time.toLocaleTimeString() }}</time>
        </div>
        <div class="chat-bubble"> {{ message.content }}</div>
        <div class="chat-footer opacity-50" v-if="message.seen">
            Vue a {{ message.seen.toLocaleTimeString() }}
        </div>
    </div>
</template>
