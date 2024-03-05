import api from "../config/api";

const useOrderHandler = () => {

  const OrderSubmit = async (allCartItems, data) => {

    let formattedString = "[";
    allCartItems?.colosWithSize?.forEach((item, index) => {
      formattedString += `\n{ color: ${item.name}\n`;

      item.selectedSize.forEach((size, i) => {
        formattedString += `${size.name.toUpperCase()}(${size.quantity})`;
        if (i !== item.selectedSize.length - 1) formattedString += ", ";
      });
      formattedString += `\n}`;
      if (index !== allCartItems?.colosWithSize.length - 1)
        formattedString += ",";
    });
    formattedString += "\n]";

    // formatted String For Image
    let formattedStringForImage = "[";
    allCartItems?.ImagesWithLogoColor?.forEach((image, index) => {
      formattedStringForImage += `\n{ Position: ${image.item}, Link: ${image.link}, ColorInLogo: ${image.colorInLogo} }`;
      if (index !== allCartItems?.ImagesWithLogoColor.length - 1)
        formattedStringForImage += ",";
    });
    formattedStringForImage += "\n]";

    const ImagesWithLogoColor = JSON.stringify(allCartItems?.ImagesWithLogoColor.map(item => ({
      Position: item.item,
      link: item.link,
      colorInLogo: item.colorInLogo
    })));

    const orderData = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {},
      shipping: {},
      line_items: [
        {
          product_id: allCartItems.productId,
          quantity: 1,
          name: allCartItems.title,
          meta_data: [
            {
              key: "Color, Sizes & Quantity",
              value: formattedString,
            },
            {
              key : 'Image URL + Color In Logo',
              value: ImagesWithLogoColor
            },
            {
              key: "_sku",
              value: allCartItems?.sku,
            },
            {
              key: "Aditional Information",
              value: allCartItems?.aditionalInformation,
            },
          ],
        },
      ],
      shipping_lines: [],
    };

    orderData.payment_method = "bacs";
    orderData.payment_method_title = allCartItems.title;
    orderData.set_paid = true;

    var billing = orderData["billing"];
    billing.email = data.email;
    billing.phone = data.mobile;
    billing.first_name = data.name;
    billing.address_1 = data.address;
    billing.city = "UK";
    var shipping = orderData["shipping"];
    shipping.first_name = data.name;
    shipping.address_1 = data.address;

    api.post("orders", orderData)
      .then((response) => {
        console.log(response.data);
        window.location.href="/success";
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return { OrderSubmit };
};

export default useOrderHandler;
