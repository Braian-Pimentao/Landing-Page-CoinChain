<template>
    <div class="column border">
        <div class="center">
                <img :src="require(`~/assets/images/${image}.png`)" :alt="alt" class="size"/>
        </div>
        <h3 class="title is-3 has-text-white">{{title}}</h3>
        <p class="is-size-5 has-text-white">{{description}}</p>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },

        alt: {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        description:{
            type: String,
            required: true
        }
    }
}
</script>

<style>
.center {
    text-align: center;
}
.size {
    width: 96px;
    height: 96px;
}

.border{
    border: 3px solid #d8d8d8;
    border-radius: 15px;
    margin: 1%;
}
</style>
