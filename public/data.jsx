export const Posts = [
     {
          title: 'Printwish UK Pack: 12 Classic Polo Shirts with Free Logo',
          slug: '1',
          ProductCode: 'BUN-UC101-12',
          image: '/images/image.webp',
          shortDescription: "This Printwish UK Pack is a bundle containing 12 of our best-selling Classic Polo Shirts with FREE LOGO and FREE DELIVERY included. This classic polo shirt is a must-have top by Uneek. Featuring a traditional collar, classic fit and three-button placket design, this shirt will have you looking smart for any occasion.",
          sizeDescription: [
               {
                    type: "XS",
                    size: "36/38"
               },
               {
                    type: "S",
                    size: "38/40"
               },
               {
                    type: "M",
                    size: "40/42"
               },
               {
                    type: "L",
                    size: "42/44"
               },
               {
                    type: "XL",
                    size: "44/46"
               },
               {
                    type: "2XL",
                    size: "46/48"
               },
               {
                    type: "3XL",
                    size: "50/52"
               }
          ],
          color: [{
               code: "232323",
               name: "color 1"
          }, {
               code: "134532",
               name: "color 2"
          }, {
               code: "535156",
               name: "color 3"
          }, {
               code: "22293B",
               name: "color 4"
          }, {
               code: "C5C9D5",
               name: 'color 5'
          }],
          price: 110,
          Gender: 'Male',
          ImprintArea: {
               LeftBreast: '90 x 90 mm',
               Front: '420 x 297 mm',
               Back: '420 x 297 mm',
          },
          ImprintMethod: "Supplied bulk packed Individual poly-bagging @ £0.20 each",
          ReadyToShip: "3-5 Working days from artwork approval to dispatch",
          Packaging: "Screen printed",
          MinimumOrderQuantity: 25,
          features: [
               "Reactive dyed",
               "Knitted collar",
               "Taped neck",
               "Hemmed sleeve & bottom",
               "3 Self coloured button placket"
          ],
          fabric: "50% Polyester 50% Cotton",
          Weight: "220gsm",
          WashingInstructions: "Washable at 60°C"
     }
]


export const designVarient = [
     {
          placement: '',
          image: '/images/tshirt-varients/left-breast.jpeg',
          position: 'Left Breast',
     },
     {
          placement: '',
          image: '/images/tshirt-varients/right-breast.jpeg',
          position: 'Right Breast',
     },
     {
          placement: '',
          image: '/images/tshirt-varients/center-chest.jpeg',
          position: 'Centre Front',
     },
     {
          placement: '',
          image: '/images/tshirt-varients/big back.jpeg',
          position: 'Centre Back',
     },
     {
          placement: '',
          image: '/images/tshirt-varients/left sleeve.jpeg',
          position: 'Left Sleeve',
     },
     {
          placement: '',
          image: '/images/tshirt-varients/right sleeve.jpeg',
          position: 'Right Sleeve',
     },
     {
          placement: '',
          image: '/images/tshirt-varients/nape of neck.jpeg',
          position: 'Nape of Neck',
     },
     {
          placement: '',
          image: '/images/tshirt-varients/big front.jpeg',
          position: 'Big Front',
     },
     // {
     //      placement: 'Front',
     //      image: '/images/tshirt-varients/front_Specify_in_Notes.png',
     //      position: 'Specify in Notes',
     // },
]


export const orderData = {
     payment_method: "bacs",
     payment_method_title: "Stripe",
     set_paid: true,
     status: "processing",
     billing: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: "",
          phone: ""
     },
     shipping: {
          first_name: "John",
          last_name: "Doe",
          address_1: "969 Market",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "UK"
     },
     line_items: [],
     shipping_lines: []

};

// images data 
export const TShirtPrint = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy4xNDYiIGhlaWdodD0iMTguMTI2IiB2aWV3Qm94PSIwIDAgMTcuMTQ2IDE4LjEyNiI+DQogIDxnIGlkPSJHcnVwb18yNTM2IiBkYXRhLW5hbWU9IkdydXBvIDI1MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0Ni4xNTIgLTI2NC4wNDMpIj4NCiAgICA8cmVjdCBpZD0iUmVjdMOhbmd1bG9fMjM0IiBkYXRhLW5hbWU9IlJlY3TDoW5ndWxvIDIzNCIgd2lkdGg9IjEwLjA2MiIgaGVpZ2h0PSIzLjk5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Mi42MSAyNzguMTc0KSIgZmlsbD0iI2ZmZiIvPg0KICAgIDxwYXRoIGlkPSJUcmF6YWRvXzU3NiIgZGF0YS1uYW1lPSJUcmF6YWRvIDU3NiIgZD0iTS0zMjYuMzUzLDM2My43NzFoLTEyLjA2OWExLjgxNCwxLjgxNCwwLDAsMC0yLjAwNywxLjUyNnYzLjY1MWExLjc3MSwxLjc3MSwwLDAsMCwyLjAwNywxLjY4OXYtMi45NzloMTIuMDY5djIuOTc5YTEuNzcxLDEuNzcxLDAsMCwwLDIuMDA3LTEuNjg5VjM2NS4zQTEuODE0LDEuODE0LDAsMCwwLTMyNi4zNTMsMzYzLjc3MVptLTExLjUyLDIuNDg4aC0xLjEwOHYtMS4xMDhoMS4xMDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNS4xOTIgLTkwLjQ2NSkiIGZpbGw9IiNmZmYiLz4NCiAgICA8cGF0aCBpZD0iVHJhemFkb181NzciIGRhdGEtbmFtZT0iVHJhemFkbyA1NzciIGQ9Ik0tMzI5LjAwNywyNjcuMmwtNi4xNzUtMy4xNmgtLjIxOHMtLjI3Mi4zMjctMi4xNzkuMzI3LTIuMTgtLjMyNy0yLjE4LS4zMjdoLS4yMThsLTYuMTc1LDMuMTYsMS41MjYsMy4yNTEsMi4wMTYtLjIyNHYyLjEzMWgxMC4wNjJWMjcwLjIzbDIuMDE2LjIyNFptLTguNTczLTJhNS4wNTQsNS4wNTQsMCwwLDAsMS45MDctLjI4NSwyLjMsMi4zLDAsMCwxLTEuOTA3LDEuMDksMi4zLDIuMywwLDAsMS0xLjkwNy0xLjA5QTUuMDU1LDUuMDU1LDAsMCwwLTMzNy41NzksMjY1LjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0iI2ZmZiIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="
export const TshirtSwitch = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC40NzgiIGhlaWdodD0iMjAuMTM4IiB2aWV3Qm94PSIwIDAgMjAuNDc4IDIwLjEzOCI+DQogIDxnIGlkPSJHcnVwb18yNTM3IiBkYXRhLW5hbWU9IkdydXBvIDI1MzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDUuMTczIC0yOTIuMDgzKSI+DQogICAgPHBhdGggaWQ9IlRyYXphZG9fNTY0IiBkYXRhLW5hbWU9IlRyYXphZG8gNTY0IiBkPSJNOTQ1LjYsMzEyLjA0OWwxMi42MzUtMTQuNDExLDMuMjI5LTMuNTkzYTMuMjcxLDMuMjcxLDAsMCwxLDIuMDg2LTEuMDUsMS43MSwxLjcxLDAsMCwxLDEuNjU1LDEuMzg2LDIuODYsMi44NiwwLDAsMS0xLjA2MywyLjQ0OWwtMS4xNzEsMS4xMTctLjU2NS0uNzk0LDEuMTcxLTEuMXMuNzI3LS42MzIuNDg0LTEuMzQ2YS45LjksMCwwLDAtMS4yMTEtLjU3OSw2LjUyNyw2LjUyNywwLDAsMC0xLjU0NywxLjUzNGwtMi4zMjgsMi44MjZzLS44NzUsMS4zMzItLjc1MywxLjQ5NC44NjEtLjMwOSwxLjk3OC0xLjE3MWwuNjg2Ljk4Mi02LjE3Niw1LjI4OC00Ljk1Miw0LjM3My0yLjkyLDIuNi0uNzUzLjY0NnMtLjU5Mi41LS44NDguM0M5NDUuMjMyLDMxMi45OTEsOTQ0Ljk1OCwzMTIuNzc1LDk0NS42LDMxMi4wNDlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjgxOCkiIGZpbGw9IiNmZmYiLz4NCiAgICA8ZyBpZD0iR3J1cG9fMjUzMiIgZGF0YS1uYW1lPSJHcnVwbyAyNTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDUuMjIzIDI5Mi4wODMpIj4NCiAgICAgIDxwYXRoIGlkPSJUcmF6YWRvXzU2NSIgZGF0YS1uYW1lPSJUcmF6YWRvIDU2NSIgZD0iTTk1MS4wMTUsMjkyLjk2M2EuNjcxLjY3MSwwLDAsMCwuMDA5LS41MzIuNTgzLjU4MywwLDAsMC0uMzIyLS4zLjk4MS45ODEsMCwwLDAtLjc4Ny4xLDcuMDM1LDcuMDM1LDAsMCwwLTMuMjkzLDIuODA2Yy0uMDE4LjAzLS40NDMuNzQxLjAxMSwxLjA3NWEuNi42LDAsMCwwLC4zNi4xMjUuNTU2LjU1NiwwLDAsMCwuMS0uMDA5Ljk1NC45NTQsMCwwLDAsLjYxMi0uNTM4LDUuNTQsNS41NCwwLDAsMSwyLjg2Ni0yLjM0M0EuODQuODQsMCwwLDAsOTUxLjAxNSwyOTIuOTYzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0Ni4zNDYgLTI5Mi4wODMpIiBmaWxsPSIjZmZmIi8+DQogICAgICA8cGF0aCBpZD0iVHJhemFkb181NjYiIGRhdGEtbmFtZT0iVHJhemFkbyA1NjYiIGQ9Ik05NzEuMzE1LDMxMC4xOTFhLjA1MS4wNTEsMCwwLDAtLjA2NiwwbC0uOTU4LjczM2EuMDUxLjA1MSwwLDAsMCwwLC4wODEsMy41NjQsMy41NjQsMCwwLDEsLjg2NC45MzcuOTUuOTUsMCwwLDAsLjY1MS40ODNsLjA1NCwwYS41OTMuNTkzLDAsMCwwLC4zOS0uMTUyYy40MjgtLjM3Mi0uMDUyLTEuMDQ3LS4wNzEtMS4wNzNBNS4yOTQsNS4yOTQsMCwwLDAsOTcxLjMxNSwzMTAuMTkxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk2Ny43MzIgLTMwOC4zMTEpIiBmaWxsPSIjZmZmIi8+DQogICAgICA8cGF0aCBpZD0iVHJhemFkb181NjciIGRhdGEtbmFtZT0iVHJhemFkbyA1NjciIGQ9Ik05NDYuMTU3LDI5My4zNDVjLjE1LjA2Ny4zLjEzOC40NC4yMWEuMDUzLjA1MywwLDAsMCwuMDI0LjAwNi4wNTIuMDUyLDAsMCwwLC4wMzUtLjAxNGwuOTE4LS44NjdhLjA1Mi4wNTIsMCwwLDAtLjAxLS4wODMsNi4yLDYuMiwwLDAsMC0uNzQ4LS4zNjUuOTgzLjk4MywwLDAsMC0uNzg5LS4xMDYuNTgzLjU4MywwLDAsMC0uMzIyLjMwNi42NzEuNjcxLDAsMCwwLC4wMS41M0EuODM2LjgzNiwwLDAsMCw5NDYuMTU3LDI5My4zNDVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQ1LjY1NiAtMjkyLjA4MykiIGZpbGw9IiNmZmYiLz4NCiAgICA8L2c+DQogICAgPGcgaWQ9IkdydXBvXzI1MzMiIGRhdGEtbmFtZT0iR3J1cG8gMjUzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ1LjIyMyAyOTYuNzM5KSI+DQogICAgICA8cGF0aCBpZD0iVHJhemFkb181NjgiIGRhdGEtbmFtZT0iVHJhemFkbyA1NjgiIGQ9Ik05NTEuMDE1LDMzOC4wOTRhLjY3MS42NzEsMCwwLDAsLjAwOS0uNTMyLjU4My41ODMsMCwwLDAtLjMyMi0uMy45ODEuOTgxLDAsMCwwLS43ODcuMSw3LjAzNSw3LjAzNSwwLDAsMC0zLjI5MywyLjgwNmMtLjAxOC4wMy0uNDQzLjc0LjAxMSwxLjA3NWEuNi42LDAsMCwwLC4zNi4xMjUuNTU4LjU1OCwwLDAsMCwuMS0uMDA5Ljk1NC45NTQsMCwwLDAsLjYxMi0uNTM4LDUuNTQxLDUuNTQxLDAsMCwxLDIuODY2LTIuMzQzQS44NC44NCwwLDAsMCw5NTEuMDE1LDMzOC4wOTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQ2LjM0NiAtMzM3LjIxMykiIGZpbGw9IiNmZmYiLz4NCiAgICAgIDxwYXRoIGlkPSJUcmF6YWRvXzU2OSIgZGF0YS1uYW1lPSJUcmF6YWRvIDU2OSIgZD0iTTk3MS4zMTUsMzU1LjMyMWEuMDUxLjA1MSwwLDAsMC0uMDY2LDBsLS45NTguNzM0YS4wNTEuMDUxLDAsMCwwLDAsLjA4MSwzLjU2NywzLjU2NywwLDAsMSwuODY0LjkzNy45NS45NSwwLDAsMCwuNjUxLjQ4M2wuMDU0LDBhLjU5My41OTMsMCwwLDAsLjM5LS4xNTJjLjQyOC0uMzcyLS4wNTItMS4wNDctLjA3MS0xLjA3M0E1LjI5MSw1LjI5MSwwLDAsMCw5NzEuMzE1LDM1NS4zMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTY3LjczMiAtMzUzLjQ0MSkiIGZpbGw9IiNmZmYiLz4NCiAgICAgIDxwYXRoIGlkPSJUcmF6YWRvXzU3MCIgZGF0YS1uYW1lPSJUcmF6YWRvIDU3MCIgZD0iTTk0Ni4xNTcsMzM4LjQ3NWMuMTUuMDY3LjMuMTM4LjQ0LjIxYS4wNTIuMDUyLDAsMCwwLC4wNTktLjAwOGwuOTE4LS44NjdhLjA1Mi4wNTIsMCwwLDAsLjAxNi0uMDQ0LjA1Mi4wNTIsMCwwLDAtLjAyNi0uMDM5LDYuMTg5LDYuMTg5LDAsMCwwLS43NDgtLjM2NS45ODMuOTgzLDAsMCwwLS43ODktLjEwNi41ODMuNTgzLDAsMCwwLS4zMjIuMzA2LjY3MS42NzEsMCwwLDAsLjAxLjUzQS44MzguODM4LDAsMCwwLDk0Ni4xNTcsMzM4LjQ3NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDUuNjU2IC0zMzcuMjEzKSIgZmlsbD0iI2ZmZiIvPg0KICAgIDwvZz4NCiAgICA8ZyBpZD0iR3J1cG9fMjUzNCIgZGF0YS1uYW1lPSJHcnVwbyAyNTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDUuMjIzIDMwMS4zOTQpIj4NCiAgICAgIDxwYXRoIGlkPSJUcmF6YWRvXzU3MSIgZGF0YS1uYW1lPSJUcmF6YWRvIDU3MSIgZD0iTTk1MS4wMTUsMzgzLjIyNGEuNjcxLjY3MSwwLDAsMCwuMDA5LS41MzIuNTgyLjU4MiwwLDAsMC0uMzIyLS4zLjk4MS45ODEsMCwwLDAtLjc4Ny4xLDcuMDM0LDcuMDM0LDAsMCwwLTMuMjkzLDIuODA2Yy0uMDE4LjAzLS40NDMuNzQuMDExLDEuMDc1YS42LjYsMCwwLDAsLjM2LjEyNS41NDcuNTQ3LDAsMCwwLC4xLS4wMDkuOTU0Ljk1NCwwLDAsMCwuNjEyLS41MzgsNS41NDEsNS41NDEsMCwwLDEsMi44NjYtMi4zNDRBLjgzOS44MzksMCwwLDAsOTUxLjAxNSwzODMuMjI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0Ni4zNDYgLTM4Mi4zNDQpIiBmaWxsPSIjZmZmIi8+DQogICAgICA8cGF0aCBpZD0iVHJhemFkb181NzIiIGRhdGEtbmFtZT0iVHJhemFkbyA1NzIiIGQ9Ik05NzEuMzE1LDQwMC40NTFhLjA1MS4wNTEsMCwwLDAtLjA2NiwwbC0uOTU4LjczM2EuMDUxLjA1MSwwLDAsMCwwLC4wODEsMy41NjQsMy41NjQsMCwwLDEsLjg2NC45MzcuOTUuOTUsMCwwLDAsLjY1MS40ODNsLjA1NCwwYS41OTMuNTkzLDAsMCwwLC4zOS0uMTUyYy40MjgtLjM3Mi0uMDUyLTEuMDQ3LS4wNzEtMS4wNzNBNS4yOTQsNS4yOTQsMCwwLDAsOTcxLjMxNSw0MDAuNDUxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk2Ny43MzIgLTM5OC41NzEpIiBmaWxsPSIjZmZmIi8+DQogICAgICA8cGF0aCBpZD0iVHJhemFkb181NzMiIGRhdGEtbmFtZT0iVHJhemFkbyA1NzMiIGQ9Ik05NDYuMTU3LDM4My42MDZjLjE1LjA2Ny4zLjEzOC40NC4yMWEuMDUyLjA1MiwwLDAsMCwuMDU5LS4wMDhsLjkxOC0uODY3YS4wNTIuMDUyLDAsMCwwLS4wMS0uMDgzLDYuMTg4LDYuMTg4LDAsMCwwLS43NDgtLjM2NS45ODMuOTgzLDAsMCwwLS43ODktLjEwNS41ODMuNTgzLDAsMCwwLS4zMjIuMzA2LjY3MS42NzEsMCwwLDAsLjAxLjUzQS44MzYuODM2LDAsMCwwLDk0Ni4xNTcsMzgzLjYwNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDUuNjU2IC0zODIuMzQ0KSIgZmlsbD0iI2ZmZiIvPg0KICAgIDwvZz4NCiAgICA8cGF0aCBpZD0iVHJhemFkb181NzQiIGRhdGEtbmFtZT0iVHJhemFkbyA1NzQiIGQ9Ik0xMDEwLjYyLDMwMi4wNjNsLjgzOC0uODY4YTYuOTE0LDYuOTE0LDAsMCwwLTQuMy0xLjM3NSw5Ljc1Nyw5Ljc1NywwLDAsMC0zLjc1Mi44NC42LjYsMCwwLDAtLjE5NS45NjJjLjM3Ni40NC45ODIuMDA2Ljk4Mi4wMDZhNy44LDcuOCwwLDAsMSwzLjE1OS0uNjY2QTYuNyw2LjcsMCwwLDEsMTAxMC42MiwzMDIuMDYzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUxLjg4NSAtNi45MzkpIiBmaWxsPSIjZmZmIi8+DQogICAgPHBhdGggaWQ9IlRyYXphZG9fNTc1IiBkYXRhLW5hbWU9IlRyYXphZG8gNTc1IiBkPSJNMTA3Ny4wNDEsMzMwLjgyOGwuODM0LS45MTVhNi4zODcsNi4zODcsMCwwLDEsMS43NjMsNC42NDIsNi41Miw2LjUyLDAsMCwxLTEuNzA5LDQuMjEycy0xLjcsMS45NTEtMS42NDIsMy4xMDhjMCwwLS4xMjEsMS45LDIuNiwyLjY2NGExMS4xMzksMTEuMTM5LDAsMCwwLDIuNDQ5LjMzNnMuODA3LS4xMjEuODYxLjUyNWMwLDAsLjEzNS42ODYtLjc2Ny42ODYsMCwwLTMuNDcyLjI0Mi01LjMtMS43MjJhMy41NzUsMy41NzUsMCwwLDEtMS0yLjUxNiw0LjgzMSw0LjgzMSwwLDAsMSwuODYxLTIuNTdjLjktMS4yNzQsMS4zNDYtMS44MTcsMS4zNDYtMS44MTdhNC44MzIsNC44MzIsMCwwLDAsMS4wNzctMi40MjJBNS4zMTgsNS4zMTgsMCwwLDAsMTA3Ny4wNDEsMzMwLjgyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTYuNTUgLTMzLjkyNykiIGZpbGw9IiNmZmYiLz4NCiAgPC9nPg0KPC9zdmc+DQo="
export const customizedIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOS45MTkiIGhlaWdodD0iMjUuMDA3IiB2aWV3Qm94PSIwIDAgMjkuOTE5IDI1LjAwNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQ1YzE3Yjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuOTk3IC00Ljk5MykiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjMuNzUsMTEuMDQ0YTcuOTksNy45OSwwLDAsMC0xNS41LS4wMDlBOCw4LDAsMCwwLDksMjdoM2ExLDEsMCwwLDAsMC0ySDlhNiw2LDAsMCwxLS4wMzUtMTIsMS4wMzgsMS4wMzgsMCwwLDAsMS4xLS44NTQsNS45OTEsNS45OTEsMCwwLDEsMTEuODYyLDBBMS4wOCwxLjA4LDAsMCwwLDIzLDEzYTYsNiwwLDAsMSwwLDEySDIwYTEsMSwwLDAsMCwwLDJoM2E4LDgsMCwwLDAsLjc1LTE1Ljk1NloiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTIwLjI5MywxOS43MDdhMSwxLDAsMSwwLDEuNDE0LTEuNDE0bC01LTVhMSwxLDAsMCwwLTEuNDE0LDBsLTUsNWExLDEsMCwxLDAsMS40MTQsMS40MTRMMTUsMTYuNDE0VjI5YTEsMSwwLDAsMCwyLDBWMTYuNDE0WiIvPjwvZz48L3N2Zz4="
export const textIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC4wMTQiIGhlaWdodD0iMzAuMDE0IiB2aWV3Qm94PSIwIDAgMzAuMDE0IDMwLjAxNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQ1YzE3Yjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMzUuMDUsMTQ1LjIzMmgxLjc1OXYtMS40NzNoNC40NTJ2MTAuMDE1aC0xLjUyNHYxLjc1OWg0LjgwNnYtMS43NTlIMTQzLjAyVjE0My43NTloNC40NTJ2MS40NzNoMS43NTlWMTQySDEzNS4wNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMTMzIC0xMzMuNjc2KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjcuOTE4LDIzLjUwN3YtMTdBMy4zOCwzLjM4LDAsMSwwLDIzLjUwNywyLjFoLTE3QTMuMzgsMy4zOCwwLDEsMCwyLjEsNi41MDd2MTdhMy4zOCwzLjM4LDAsMSwwLDQuNDExLDQuNDExaDE3YTMuMzgsMy4zOCwwLDEsMCw0LjQxMS00LjQxMVpNMjMuMjg3LDI2LjE2SDYuNzI3YTMuMzg3LDMuMzg3LDAsMCwwLTIuODczLTIuODczVjYuNzI3QTMuMzg3LDMuMzg3LDAsMCwwLDYuNzI3LDMuODU0aDE2LjU2QTMuMzg3LDMuMzg3LDAsMCwwLDI2LjE2LDYuNzI3djE2LjU2QTMuMzg3LDMuMzg3LDAsMCwwLDIzLjI4NywyNi4xNlptMy4zNDctMjQuNEExLjYyMiwxLjYyMiwwLDEsMSwyNS4wMTIsMy4zOCwxLjYyNCwxLjYyNCwwLDAsMSwyNi42MzMsMS43NTlabS0yMy4yNTMsMEExLjYyMiwxLjYyMiwwLDEsMSwxLjc1OSwzLjM4LDEuNjI0LDEuNjI0LDAsMCwxLDMuMzgsMS43NTlabTAsMjYuNUExLjYyMiwxLjYyMiwwLDEsMSw1LDI2LjYzMywxLjYyNCwxLjYyNCwwLDAsMSwzLjM4LDI4LjI1NVptMjMuMjUzLDBhMS42MjIsMS42MjIsMCwxLDEsMS42MjItMS42MjJBMS42MjQsMS42MjQsMCwwLDEsMjYuNjMzLDI4LjI1NVoiLz48L3N2Zz4="
export const penIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMjcybDEyOC00MEwzODYuMiAyMy40IDQwOCAwbDIyLjYgMjIuNiA1OC43IDU4LjdMNTEyIDEwNGwtMjMuNCAyMS44TDI4MCAzMjAgMjQwIDQ0OCAzMiA1MTIgMCA0ODAgNjQgMjcyem0xNTEuNC0xOC4ybC0xLjQgMS41TDI1Ni42IDI5OGwxLjUtMS40TDQ2NS45IDEwMy4yIDQwOC44IDQ2LjEgMjE1LjQgMjUzLjh6TTE4MiAyNjguNkw4OS42IDI5Ny41IDQ0LjIgNDQ1LjIgMTEyIDM3Ny4zYzAtLjQgMC0uOSAwLTEuM2MwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0Yy0uNCAwLS45IDAtMS4zIDBMNjYuOCA0NjcuOGwxNDcuNy00NS40TDI0My40IDMzMCAxODIgMjY4LjZ6Ii8+PC9zdmc+"


export const faqs = [
     {
          question: 'Washing Instructions',
          answer: "Advice on the best way to look after your customised garments. You want your customised garments to last and to look good for as long as possible. Following these guidelines will help you to get the most out of your clothing."
     },
     {
          question: 'Can I add more than 1 customisation?',
          answer: "For most garments, you can add up to 3 separate customisations using the website. If you need 4 or more customisations please contact the office and the team will be happy to assist you."
     },
     {
          question: 'Ordering Samples',
          answer: "You may wish to view samples of garments in order to find the right size or assess the quality of the material. This is especially useful as you are not able to return customised garments if they are the wrong size (see full Terms and Conditions) To obtain samples you will need to place an order for the plain garments you wish to view. We are not able to supply free samples for online orders. You can then either keep the garments or return them to us for a refund within 14 days. We reserve the right not to accept samples returned without either an invoice or order reference. A refund will not be issued if the garments are returned tarnished or not in their original packaging. "
     },
     {
          question: 'How much does it cost?',
          answer: "At Printwish UK, we offer free UK Shipping on all orders. Our lead time is 5-7 working days from the payment date and digital proof approval."
     },   
]


export const locationFaqs = [
     {
          question: 'What is the average price of a printed t-shirt?',
          answer: "At Printwish, the minimum order quantity is 25 and the maximum limit exceeds 1000+. The price of custom t-shirts differs vary significantly depending on multiple factors like t-shirt quality, design, color, print, etc. However, the average price of a printed t-shirt ranges from £3.53 / each to £5.10"
     }, 
     {
          question: 'Is it cheaper to make your own t-shirts?',
          answer: "Yes, it is. Instead of buying t-shirts from retail stores, having one custom-made is better for style and is lowly priced. When you purchase off-the-rack t-shirts, the options are limited in terms of color, style, and design. On the contrary, making your own t-shirts allows one to have their unique design printed at reasonable costs."
     }, 
     {
          question: 'What material is best for T-shirt printing?',
          answer: "While different materials are used for t-shirt printing in London, cotton is the most preferred because of its soft and comfortable feel. At Printwish, all our t-shirts are made of 100% cotton, making them soft and comfortable. Also, cotton as a material has a high absorbency rate, making them ideally suited for printing."
     },
     {
          question: 'How do you print professional t-shirts?',
          answer: "Screen printing is the most common method used for printing t-shirts in bulk. As compared to digital printing, the ink used in screen printing is typically thicker and assures brighter prints, even on dark-coloured t-shirts. Moreover, screen printing is the highest-quality printing method that is also affordable"
     },
     {
          question: 'What kind of t-shirts sells the most?',
          answer: "As one of the most popular selling clothing items, t-shirts are the most comfortable and easy to wear, making them fit for all social and casual occasions. While there are innumerable t-shirt options, custom-printed ones sell the most. At Printwish, all our t-shirts are equally in-demand."
     },
     {
          question: 'Are your T-shirts washable?',
          answer: "Available in an array of colours, designs, and prints, all t-shirts at Printwish are made of fine materials, are easy to wash, and continue to serve for years without fading or discolouring."
     },
]