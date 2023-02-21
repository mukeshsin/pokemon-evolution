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
    name: "Cards",
}
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    margin: 20px;
    width: 300px;
}

.card-header {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
}

.card-header h2 {
    margin: 0;
    font-size: 24px;
}

.card-body {
    padding: 10px;
}

.card-footer {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: center;
    font-size: 14px;
}
</style>
