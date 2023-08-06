<template>
    <SearchProduct @productToSearch="handleProductSearch" />
    <div class="products" v-if="products && Array.isArray(products)">
        <div v-for="(product, i) in products" :key="product.code">
            <div class="product" v-if="product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())">
                <div class="" v-if="product.images[0].url">
                    <img :src="product.images[0].url" :alt="product.name">
                </div>
                <div v-else>
                    <img src="../assets/images/notFound.jpg" alt="Image Not Found">
                </div>
                <div class="productNameBox">
                    <p>{{ product.name }}</p><v-checkbox v-model="isChecked[i]" color="teal-lighten-2" class="checkbox"
                        :value="product" @change="handleClick(i)"></v-checkbox>
                </div>
            </div>
            <div v-else>
                <p>{{ product.message }}</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import SearchProduct from './SearchProduct.vue';
import store from '@/store';

export default {
    emits: ['productsSelected', 'isChecked'],

    data() {
        return {
            // store: useStore(),
            searchQuery: "",
            products:
                [
                    {
                        code: Number,
                        categories: [],
                        name: "",
                        images: [{
                            url: ""
                        }],
                        message: ""
                    }
                ],
            loading: false,
            counterValue: 0,
            productsSelected: [
                {
                    code: Number,
                    categories: [],
                    name: "",
                    images: [{
                        url: ""
                    }],
                    message: ""
                }
            ],
            isChecked: []
        }
    },
    components: {
        SearchProduct
    },
    methods: {
        handleProductSearch(products: []) {
            this.products = products;
        },

        handleClick(index: number) {
            this.$emit('isChecked', index);
            const selectedProduct = this.products[index];
            store.dispatch('initializeState');
            store.dispatch('addProduct', selectedProduct);
            const counterValue = this.isChecked.filter(isChecked => isChecked).length;
            store.dispatch('addCounter', counterValue);
            console.log(counterValue)
        }
    }
}
</script>

<style scoped lang="scss">
.products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;

    .product {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;

        img {
            width: 250px;
        }

        .productNameBox {
            display: flex;

            p {
                letter-spacing: 1px;
            }

            .checkbox {
                position: relative;
                top: -15px;
                margin-left: 5px;
            }
        }
    }
}
</style>