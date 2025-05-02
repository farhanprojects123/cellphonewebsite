const phones = {
    Oppo: [
      { model: "Oppo A5 Pro", ram: "8GB", storage: "128GB/256GB", battery: "5800mAh", camera: "50+2MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"Dual Sim" },
      { model: "Oppo A2 Pro", ram: "8GB/12GB", storage: "256GB/512GB", battery: "5000mAh", camera: "64MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"Dual Sim" },
      { model: "Oppo Reno 10 Pro", ram: "8GB/12GB", storage: "256GB", battery: "4600mAh", camera: "50MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"Dual Nano Sim" },
      { model: "Oppo Find N5", ram: "12GB/16GB", storage: "265GB/512GB/1TB", battery: "5600mAh", camera: "50MP", Display: "8.12 inches" , Operating_System:"Andriod", SIM_Support :"Dual Nano Sim"},

    ],
    Infinix: [
    { model: "Infinix Hot 8", ram: "2GB/4GB", storage: "32GB/64GB", battery: "5000mAh", camera: "13MP", Display: "6.52 inches" , Operating_System:"Andriod", SIM_Support :"Dual Nano Sim" },
    { model: "Infinix Hot 12", ram: "6GB", storage: "128GB", battery: "5000mAh", camera: "13MP + 2MP + AI Lens", Display: "6.82 inches" , Operating_System:"Andriod", SIM_Support :"Dual Nano Sim" },
    { model: "Infinix Hot 30", ram: "8GB/4GB", storage: "128GB", battery: "5000mAh", camera: "50MP + 0.08MP", Display: "6.78 inches" , Operating_System:"Andriod", SIM_Support :"Dual Nano Sim" },
    { model: "Infinix Smart Hd", ram: "2GB", storage: "32GB", battery: "5000mAh", camera: "8MP", Display: "6.1 inches" , Operating_System:"Andriod", SIM_Support :"Dual Nano Sim" },

    ],
    Oneplus: [
    { model: "Oneplus 6t ", ram: "8GB", storage: "256GB", battery: "3700mAh", camera: "16MP", Display: "6.41 inches" , Operating_System:"Andriod", SIM_Support :"eSim" },
    { model: "Oneplus 7 Pro", ram: "6GB/8GB/12GB ", storage: "128GB/256GB", battery: "4000mAh", camera: "48MP", Display: "6.67 inches" , Operating_System:"Andriod", SIM_Support :"eSim" },
    { model: "Oneplus 8 Pro", ram: "12GB", storage: "256GB", battery: "4510mAh", camera: "48MP + 8MP + 5MP", Display: "6.78 inches" , Operating_System:"Andriod", SIM_Support :"eSim" },
    { model: "Oneplus 9 Pro", ram: "12GB", storage: "256GB", battery: "4500mAh", camera: "48MP + 8MP + 50MP + 2MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"eSim" },

    ],
    Samsung: [
    { model: "Galaxy S25 Ultra", ram: "12GB", storage: "512GB", battery: "5000mAh", camera: "200MP + 50MP + 10MP", Display: "6.9 inches" , Operating_System:"Andriod", SIM_Support :"Dual / eSim" },
    { model: "Galaxy S24 Ultra", ram: "12GB", storage: "512GB", battery: "5000mAh", camera: "200MP + 50MP + 12MP", Display: "6.8 inches" , Operating_System:"Andriod", SIM_Support :"Dual" },
    { model: "Galaxy S23 Ultra", ram: "12GB", storage: "512GB", battery: "5000mAh", camera: "200MP + 10MP + 12MP", Display: "6.8 inches" , Operating_System:"Andriod", SIM_Support :"Dual + eSim" },
    { model: "Galaxy S10 Plus", ram: "8GB", storage: "512GB", battery: "4100mAh", camera: "12MP + 16MP + 12MP", Display: "6.4 inches" , Operating_System:"Andriod", SIM_Support :"Dual Nano Hybrid Sim" },

    ],
    Apple: [
    { model: "Phone 12 Pro Max", ram: "6GB", storage: "256GB", battery: "3279mAh", camera: "12MP + 12MP + 8MP", Display: "6.4 inches" , Operating_System:"IOS", SIM_Support :"Dual" },
    { model: "Phone 13 Pro", ram: "6GB", storage: "128GB", battery: "3279mAh", camera: "12MP", Display: "6.7 inches" , Operating_System:"IOS", SIM_Support :"Dual" },
    { model: "IPhone 14 Pro", ram: "6GB", storage: "512GB", battery: "3200mAh", camera: "48MP + 12MP + 12MP", Display: "6.1 inches" , Operating_System:"IOS", SIM_Support :"Nano-Sim / eSim" },
    { model: "IPhone 16 Pro Max", ram: "8GB", storage: "1TB", battery: "4676mAh", camera: "48MP + 48MP + 12MP", Display: "6.9 inches" , Operating_System:"IOS", SIM_Support :"Nano-Sim / eSim" },

    ],
    Xiaomi: [
    { model: "Xiaomi 14 Ultra", ram: "6GB", storage: "128GB", battery: "3279mAh", camera: "12MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"Dual" },
    { model: "Xiaomi 13 Pro", ram: "6GB", storage: "128GB", battery: "3279mAh", camera: "12MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"Dual" },
    { model: "Xiaomi 12 / 12 Pro", ram: "6GB", storage: "128GB", battery: "3279mAh", camera: "12MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"Dual" },
    { model: "Xiaomi 11i HyperCharge", ram: "6GB", storage: "128GB", battery: "3279mAh", camera: "12MP", Display: "6.7 inches" , Operating_System:"Andriod", SIM_Support :"Dual" },

     ]
  };

  // Step 1: Show brands
  function showBrands() {
    const brand1 = document.getElementById("brand1");
    const brand2 = document.getElementById("brand2");

    for (let brand in phones) {
      let option1 = document.createElement("option");
      option1.value = brand;
      option1.textContent = brand;
      brand1.appendChild(option1);

      let option2 = document.createElement("option");
      option2.value = brand;
      option2.textContent = brand;
      brand2.appendChild(option2);
    }
  }

  // Step 2: Show models after selecting brand
  function showModels(brandDropdownId, modelDropdownId) {
    const brandDropdown = document.getElementById(brandDropdownId);
    const modelDropdown = document.getElementById(modelDropdownId);

    modelDropdown.innerHTML = "<option value=''>Select Phone</option>";

    const selectedBrand = brandDropdown.value;

    if (selectedBrand) {
      phones[selectedBrand].forEach((phone, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = phone.model;
        modelDropdown.appendChild(option);
      });
    }

    const specsDiv = document.getElementById(modelDropdownId === "model1" ? "specs1" : "specs2");
    specsDiv.innerHTML = "";
  }

  // Step 3: Show phone specs
  function showPhoneSpecs(modelDropdownId, specsDivId) {
    const modelDropdown = document.getElementById(modelDropdownId);
    const selectedModelIndex = modelDropdown.value;

    const brandDropdown = document.getElementById(modelDropdownId === "model1" ? "brand1" : "brand2");
    const selectedBrand = brandDropdown.value;

    const specsDiv = document.getElementById(specsDivId);

    if (selectedBrand && selectedModelIndex !== "") {
      const phone = phones[selectedBrand][selectedModelIndex];

      specsDiv.innerHTML = `
        <table>
          <tr><th>Feature</th><th>Details</th></tr>
          <tr><td>Model</td><td>${phone.model}</td></tr>
          <tr><td>RAM</td><td>${phone.ram}</td></tr>
          <tr><td>Storage</td><td>${phone.storage}</td></tr>
          <tr><td>Battery</td><td>${phone.battery}</td></tr>
          <tr><td>Camera</td><td>${phone.camera}</td></tr>
          <tr><td>Display</td><td>${phone.Display}</td></tr>
          <tr><td>Operating System</td><td>${phone.Operating_System}</td></tr>
          <tr><td>SIM Support</td><td>${phone.SIM_Support}</td></tr>

        </table>
      `;
    }
  }

  // Initialize
  showBrands();