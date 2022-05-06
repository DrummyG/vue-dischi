<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <img :src="disc.poster" alt="" class="w-75">
        <p class="big text-center text-uppercase">{{disc.title}}</p>
        <div>
            <p class="smol text-center">{{disc.author}}</p>
        <p class="smol text-center">{{disc.year}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCard',
    props: {
        disc : Object
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/generals.scss";

.big{
    color: $light;
}

.smol{
    margin: 0;
    color: rgb(151, 151, 151);
}

.d-flex{
    padding-top: 20px;
}

</style>