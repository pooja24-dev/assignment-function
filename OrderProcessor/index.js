module.exports = async function (context, req) {
    context.log('OrderProcessor function received a request.');

    const order = req.body;

    if (!order || !order.orderId) {
        context.res = {
            status: 400,
            body: "Invalid order data. 'orderId' is required."
        };
        return;
    }

    // Simulate async processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    context.log(`Processed order: ${order.orderId}`);

    context.res = {
        status: 200,
        body: `Order ${order.orderId} processed successfully!`
    };
};
