<template>
<div class="card">
    <div class="card-header">
        <slot name="title"></slot>
    </div>
    <div class="card-body">
        <slot name="content"></slot>
    </div>
    <div class="card-footer">
        <slot name="footer"></slot>
    </div>

</div>
</template>

<script>
export default {
    name: "pokemonCard",
}
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    margin: 10px;
    width: 400px;
    float: right;
}

.card-header {
    background-color: #eee;
    border-bottom: 2px solid #ccc;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

.card-body {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.card-footer {
    border-top: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    height: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;

}
</style>
