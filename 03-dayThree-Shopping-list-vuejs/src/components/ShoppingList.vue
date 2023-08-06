<template>
    <div class="products" v-for="product in selectedProducts" :key="product.code">
        <v-card variant="tonal" max-width="400">
            <div class="price">
                <v-card-actions class="btn-delete">
                    <v-btn icon="$delete" variant="text" color="teal-lighten-2" @click="handleClick(product)"></v-btn>
                </v-card-actions>
                <span class="getPrice">{{ getProductPrice(product) }}</span>
            </div>
            <v-img :src="product.images[0].url" cover class="img text-white" max-height="250" max-width="250"
                style="object-fit: cover; object-position: center;"></v-img>

            <v-card-title class="title">{{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle">{{ product.packSize }} - {{ product.unitPriceStr }}</v-card-subtitle>
            <v-card-text>{{ getDescription(product) }}</v-card-text>
        </v-card>
    </div>
    <div class="btn-validate">
        <v-btn v-if="selectedProducts.length > 0" color="teal-lighten-2">validate the order</v-btn>
    </div>
</template>

<script lang="ts">
import store from '@/store';

export default {
    data() {
        return {
            selectedProducts: [
                {
                    code: Number,
                    description: "",
                    categories: [
                        {
                            name: ""
                        }
                    ],
                    name: "",
                    images: [{
                        url: ""
                    }],
                    price: {
                        currencyIso: "",
                        value: 0,
                        priceType: "",
                        formattedValue: "",
                        minQuantity: null,
                        maxQuantity: null
                    },
                    packSize: "",
                    unitPriceStr: "",
                    message: ""
                }
            ]
        };
    },
    created() {
        store.dispatch('initializeState');
        this.selectedProducts = store.getters.getProductsSelected;
        console.log(this.selectedProducts);
    },
    methods: {
        getProductPrice(product: {
            price: {
                formattedValue: string;
            };
        }): string {
            return product.price ? product.price.formattedValue : 'Unavailable';
        },

        getDescription(product: {
            description: string
        }): string {
            return product.description ? product.description : 'Unavailable';
        },

        handleClick(product: any) {
            // store.dispatch('initializeState');
            store.commit('removeProduct', product);
        }

    }
};
</script>

<style scoped lang="scss">
.products {
    display: flex;
    color: white;
    margin: 20px;
    // width: 20%;

    .price {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .btn-delete {
            position: relative;
            bottom: 10px;
            right: 20px;
        }

        .getPrice {
            display: flex;
            margin-top: 10px;
        }

    }

    .v-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 10px 0 10px;

        .subtitle,
        .title {
            white-space: pre-line;
            text-align: center;
        }
    }

    .img {
        width: 250px;
        height: 250px;
        border-radius: 100%;
    }
}

.btn-validate {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 50px;
}
</style>