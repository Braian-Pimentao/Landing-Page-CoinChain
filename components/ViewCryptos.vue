<template>
    <div class="position-z m-0 mt-6 p-2 has-background-white border">
        <div class="columns ">
            <div class="column">
                <h1 class="center title is-1"><u>Visualizador de Criptomonedas</u></h1>
            </div>
        </div>
        <div class="columns">
            <div class="column is-full">
                 <h2 class="title center">Cryptos</h2>
            </div>
        </div>
        <div class="columns">
            <div class="column" v-for="crypto in cryptosAbbr" :key="crypto">
                <label class="checkbox">
                    <input type="checkbox" :value="crypto" v-model="cryptosSelect" >
                        {{crypto}}
                    </label>
            </div>
        </div>

        <div class="columns">
            <div class="column is-full"><h3 class="title center">Sistema Monetario</h3></div>
        </div>
        <div class="columns">
            <div class="column" v-for="moneda in monedas" :key="moneda">
                <label class="checkbox">
                    <input type="checkbox"  :value="moneda" v-model="monedasSelect">
                        {{moneda}}
                    </label>
            </div>
        </div>

        <table class="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>Crypto</th>
                    <th v-for="moneda in monedasSelect" :key="moneda">{{moneda}}</th>
                </tr>

                <tr v-for="(values,key) in criptomonedas" :key="key"> 
                    <th >{{key}}</th>
                    <th v-for="value in values" :key="value">{{value}}</th>
                </tr>
                
            </thead>
        </table>
    </div>
</template>

<script>
import api from '~/services/api'

export default {
    async created(){
        const response = await api.getCryptos(this.cryptosSelect,this.monedasSelect)
        this.criptomonedas = response.data

        this.actualizarAuto()
    },
    
    data(){
        return{
            cryptosAbbr: ["BTC","ETH","ALGO","ADA","UNI","LTC","BCH","XLM","XRP","DOGE","EOS","DAI"],
            monedas: ["USD","EUR","ARS","GBP","JPY","CNY","INR","MXN"],
            cryptosSelect:["BTC","ETH","ALGO"],
            monedasSelect:["USD","EUR"],
            criptomonedas:[]
        }
    },
    watch:{
        cryptosSelect(){
            if(this.cryptosSelect.length>0 && this.monedasSelect.length>0)
                this.actualizar()
        },
        monedasSelect(){
            if(this.monedasSelect.length>0)
                this.actualizar()
        }
    },
    methods: {
        async actualizar(){
            const response = await api.getCryptos(this.cryptosSelect,this.monedasSelect)
            this.criptomonedas = response.data
        },
        actualizarAuto(){
            var self=this;
            setInterval(function(){
                self.actualizar();
            },10000)
        }
    }
}
</script>

<style>
.border{
    border-radius: 10px;
}

.position-z{
    z-index: 1;
}
</style>