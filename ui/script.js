document.getElementById("country").addEventListener("change", function () {

    let box = document.getElementById("numbers");
    let country = this.value;

    if (country === "india") {
        box.innerHTML = `
            <h3>
                <img src="UI/images/india.png" class="flag">
                India – Emergency Services
            </h3>

            <div class="card">
                <img src="UI/images/police.png" class="icon">
                Police
                <br><a href="tel:100">Call 100</a>
            </div>

            <div class="card">
                <img src="UI/images/ambulance.png" class="icon">
                Ambulance
                <br><a href="tel:108">Call 108</a>
            </div>

            <div class="card">
                <img src="UI/images/fire.png" class="icon">
                Fire Brigade
                <br><a href="tel:101">Call 101</a>
            </div>

            <div class="card">
                <img src="UI/images/women.png" class="icon">
                Women Safety
                <br><a href="tel:181">Call 181</a>
            </div>

            <div class="card">
                <img src="UI/images/child.png" class="icon">
                Child Helpline
                <br><a href="tel:1098">Call 1098</a>
            </div>

            <div class="card">
                <img src="UI/images/disaster.png" class="icon">
                Disaster / Emergency
                <br><a href="tel:112">Call 112</a>
            </div>

            <div class="card">
                <img src="UI/images/tourist.png" class="icon">
                Tourist Helpline
                <br><a href="tel:1363">Call 1363</a>
            </div>

            <div class="card">
                <img src="UI/images/senior.png" class="icon">
                Senior Citizen Helpline
                <br><a href="tel:14567">Call 14567</a>
            </div>
        `;
    } 
    else if (country === "usa") {
        box.innerHTML = `
            <h3>
                <img src="UI/images/usa.png" class="flag">
                USA – Emergency Services
            </h3>

            <div class="card">
                <img src="UI/images/police.png" class="icon">
                Emergency (Police / Fire / Medical)
                <br><a href="tel:911">Call 911</a>
            </div>

            <div class="card">
                <img src="UI/images/women.png" class="icon">
                Women Safety
                <br><a href="tel:8007997233">Call 800-799-7233</a>
            </div>

            <div class="card">
                <img src="UI/images/child.png" class="icon">
                Child Help
                <br><a href="tel:18004224453">Call 1-800-422-4453</a>
            </div>

            <div class="card">
                <img src="UI/images/tourist.png" class="icon">
                Tourist Information
                <br><a href="tel:18004663236">Call 1-800-466-3236</a>
            </div>
        `;
    } 
    else {
        box.innerHTML = "";
    }
});