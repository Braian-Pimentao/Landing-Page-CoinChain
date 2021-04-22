<template>
<div class="p-2 has-background-white ">
        <div class="columns ">
            <div class="column">
                <h1 class="center title is-1"><u>Apoyado por</u></h1>
            </div>
        </div>
        <div class="columns ">
            <div v-for="index in 6" :key="index" class="column p-4"> 
                <img :src="links[index-1]" :alt="index">
            </div>
        </div>
        <div class="columns ">
            <div v-for="index in 6" :key="index" class="column p-4"> 
                <img :src="links[index+5]" :alt="index+5">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                "https://i2.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/lanzadera_logo_chaingo_tech.png?w=1080&ssl=1",
                "https://i0.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/airbus_bizlab_logo_chaingo_tech-3.png?w=1080&ssl=1",
                "https://i2.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/ganador_orbita_chaingo_tech-min-min-2-2-1.jpg?w=1080&ssl=1",
                "https://i2.wp.com/www.chaingotech.com/wp-content/uploads/2019/10/blockchers_logo_0.png?w=1080&ssl=1",
                "https://i1.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/bita_logo_chaingo_tech-min-1.png?w=1080&ssl=1",
                "https://i1.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/alastria_logo_chaingo_tech-min.png?w=1080&ssl=1",
                "https://i2.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/aechain_logo_chaingo_tech-1.jpg?w=1080&ssl=1",
                "https://i2.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/carex_logistics_logo_chaingo_tech-1.jpg?w=1080&ssl=1",
                "https://i2.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/cemex_ventures_logo_chaingo_tech.png?w=1080&ssl=1",
                "https://i2.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/telefonica_open_future_logo_chaingo_tech-min-1.jpg?w=1080&ssl=1",
                "https://i0.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/barlab_logo_chaingo_tech-min-1.jpg?w=1080&ssl=1",
                "https://i1.wp.com/www.chaingotech.com/wp-content/uploads/2019/11/lasalle_logo_chaingo_tech-1.jpg?w=1080&ssl=1"
            ]
        }
    }
}
</script>

<style>
.center {
    text-align: center;
}
</style>