<template>
    <div class="checkout">
        <h1>Checkout</h1>
        <form @submit.prevent="submitOrder">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <textarea id="address" v-model="address" required></textarea>
            </div>
            <div class="form-group">
                <label for="payment">Payment Method:</label>
                <select id="payment" v-model="payment" required>
                    <option value="">Select Payment Method</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>
            <button type="submit">Submit Order</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CheckoutForm",
    data() {
        return {
            name: "",
            email: "",
            address: "",
            payment: "",
        };
    },
    methods: {
        submitOrder() {
            // Submit order to server
        },
    },
};
</script>

<style scoped>
.checkout {
    margin-bottom: 2rem;
}

h1 {
    margin-top: 0;
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-wrap: wrap;
}

.form-group {
    width: 100%;
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea,
select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}
</style>