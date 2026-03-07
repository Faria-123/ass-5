// document.getElementById('log-btn').addEventListener('click', function () {
//     const userName = document.getElementById('user-btn');
//     const user = userName.value;
//     const userPass = document.getElementById('pass-btn');
//     const pass = userPass.value;
//     // console.log(user, pass);
//     if (user === "admin" && pass === "admin123") {
//         window.location.assign("./home.html");
//     }
//     else {
//         alert('Sign In Faild');
//         return;
//     }

// })
const logBtn = document.getElementById('log-btn');


if (logBtn) {
    logBtn.addEventListener('click', function () {
        const userName = document.getElementById('user-btn');
        const user = userName.value;
        const userPass = document.getElementById('pass-btn');
        const pass = userPass.value;

        if (user === "admin" && pass === "admin123") {
            window.location.assign("./home.html");
        } else {
            alert('Sign In Failed');
        }
    });
}
const allBtn = document.getElementById('all-btn');
const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');
const cardContainer = document.getElementById('card-container');
const loadingSpinner = document.getElementById('loadingSpinner');
const Total = document.getElementById('total');
const mymodal = document.getElementById('card-modal');
// modalff
const idPri = document.getElementById('id-priority');
const idTi = document.getElementById('id-title');
const idDes = document.getElementById('id-des');
const idLab0 = document.getElementById('label0');
const idLab1 = document.getElementById('label1');
const idAut = document.getElementById('id-author');
const idAss = document.getElementById('id-ass');
const idCre = document.getElementById('id-cre');
const idUpd = document.getElementById('id-upd');
const ima = document.getElementById('image');
const statusBadge = document.getElementById('status-badge');
const searchIn = document.getElementById('search');
const searchBtn = document.getElementById("search-btn");
let openArr = [];
let closedArr = [];
let ser = [];
function showLoading() {
    loadingSpinner.classList.remove("hidden");
    cardContainer.innerHTML = "";
}
function hideLoading() {
    loadingSpinner.classList.add("hidden");
}
allBtn.addEventListener("click", () => {
    // Update active button style
    const allButtons = document.querySelectorAll(
        "#btn-container #all-btn,#open-btn,#closed-btn"
    );
    console.log(allButtons);
    allButtons.forEach((btn) => {
        btn.classList.remove("blue-btn");
        btn.classList.add("pri-btn");
    });

    allBtn.classList.add("blue-btn");
    allBtn.classList.remove("pri-btn");
    showLoading();
    loadIssue();
    hideLoading();
});

loadIssue();
openBtn.addEventListener("click", () => {
    // Update active button style
    const allButtons = document.querySelectorAll(
        "#btn-container button"
    );
    //   console.log(allButtons);
    allButtons.forEach((btn) => {
        btn.classList.remove("blue-btn");
        btn.classList.add("pri-btn");
    });

    openBtn.classList.add("blue-btn");
    openBtn.classList.remove("pri-btn");
    Total.innerText = openArr.length;
    showLoading();
    card(openArr);
    hideLoading();
});
closedBtn.addEventListener("click", () => {
    // Update active button style
    const allButtons = document.querySelectorAll(
        "#btn-container button"
    );
    //   console.log(allButtons);
    allButtons.forEach((btn) => {
        btn.classList.remove("blue-btn");
        btn.classList.add("pri-btn");
    });

    closedBtn.classList.add("blue-btn");
    closedBtn.classList.remove("pri-btn");
    Total.innerText = closedArr.length;
    showLoading();
    card(closedArr);
    hideLoading();
});
async function loadIssue() {
    openArr = [];
    closedArr = [];
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const dat = await res.json();
    searchBtn.addEventListener('click', function () {
        const value = searchIn.value.toLowerCase();
        ser = [];

        dat.data.forEach(it => {
            if (it.title.toLowerCase().includes(value)) {
                ser.push(it);
            }
        });

        Total.innerText = ser.length;
        searchCard(ser);
    });


    dat.data.forEach(item => {
        if (item.status === "open") {
            openArr.push(item);
        }
        else if (item.status === "closed") {
            closedArr.push(item);
        }
    });
    console.log(closedArr);
    Total.innerText = dat.data.length;
    card(dat.data);

}
function card(card) {
    cardContainer.innerHTML = "";
    card.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card  bg-base-100 shadow-md  border border-gray-200'
        item.status === "open" ? div.classList.add("border-top-open") : div.classList.add("border-top-close");

        div.innerHTML = `
     <div class="card-body gap-3" id="${item.id}">
                        <!-- Top section -->
                        <div class="flex justify-between items-center">
                            <!-- status icon -->
                            <div class="w-10 h-10 ">
                           <img src="${item.status === "open"
                ? "./assets/Open-Status.png"
                : "./assets/Closed- Status .png"}" alt="">
                            </div >
                            
    <div class="badge badge-error badge-lg bg-red-100 text-red-500 border-none px-6">
        ${item.priority}
    </div>
                        </div >

                       
                        <h2 class="card-title text-lg font-semibold leading-6">
                            ${item.title}
                        </h2>

                        <!--Description -->
                        
                          <p class="text-gray-500 text-sm clamp-2">
                            ${item.description}
                        </p>


                        <!--Tags -->
                        <div class="flex gap-2 mt-2">
                            <div class="badge badge-outline text-red-500 border-red-300 text-[13px]">
                                ${item.labels[0]}
                            </div>

                           
                            ${item.labels?.[1] ? `
                           <div class="badge badge-outline text-orange-500 border-orange-300 text-[12px] p-1">
                               ${item.labels[1]}
                           </div>
                           ` : ""}

                        </div>

                        <div class="divider my-1"></div>

                        <!--Footer -->
   
                        <div class="flex justify-between">
                         <div class="text-sm text-gray-500">
                            <p>${item.author}</p>
                             <p>${item.assignee}</p>
                         </div>

                          <div class="text-sm text-gray-500">
                                   <p class="text-[12px]">${item.createdAt}</p>
                                    <p class="text-[12px]">${item.updatedAt}</p>
                                </div>

                        </div>


                    </div >

        `

        div.addEventListener("click", () => {
            modal(item.id);
        });

        cardContainer.appendChild(div);


    })

}


async function modal(cardId) {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${cardId}`);
    const dat = await res.json();
    const arr = dat.data;

    idTi.innerText = arr.title;
    idDes.innerText = arr.description;
    idAut.innerText = arr.author;
    idAss.innerText = arr.assignee;
    idCre.innerText = arr.createdAt;

    idPri.innerText = arr.priority.toUpperCase();

    if (arr.priority.toLowerCase() === "high") {
        idPri.className = "badge border-none bg-red-500 text-white px-4 py-3 rounded-full font-semibold";
    } else if (arr.priority.toLowerCase() === "medium") {
        idPri.className = "badge border-none bg-yellow-500 text-white px-4 py-3 rounded-full font-semibold";
    } else {
        idPri.className = "badge border-none bg-gray-500 text-white px-4 py-3 rounded-full font-semibold";
    }

    statusBadge.innerText = arr.status === "open" ? "Opened" : "Closed";
    statusBadge.className = arr.status === "open"
        ? "badge border-none bg-green-600 text-white px-3 py-3 text-[12px] font-semibold rounded-full"
        : "badge border-none bg-violet-600 text-white px-3 py-3 text-[12px] font-semibold rounded-full";

    idLab0.innerText = arr.labels?.[0] || "";
    if (arr.labels?.[1]) {
        idLab1.innerText = arr.labels[1];
        idLab1.classList.remove("hidden");
    } else {
        idLab1.innerText = "";
        idLab1.classList.add("hidden");
    }

    mymodal.showModal();
}

function searchCard(seId) {
    showLoading();
    card(seId);
    hideLoading();
}
