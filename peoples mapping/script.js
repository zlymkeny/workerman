const people = [
    {
        name: "John Yoro",
        age: 30,
        occupation: "Engineer",
        Image: "https://preview.redd.it/john-lennon-passport-photos-1960-and-1980-v0-87t6cb4zup3c1.jpg?width=1080&crop=smart&auto=webp&s=704331907fbfdf9516d9259158a451bc617cd04b",
        children: [
            {
                name: "Mike",
                age: 5
            },
            {
                name: "Sara",
                age: 3
            }
        ]
    },
    {
        name: "Joseph",
        age: 25,
        occupation: "Cook",
        Image: "https://visafoto.com/img/docs/ng_visa_35x45mm.jpg",
        children: [
            {
                name: "Jamie",
                age: 21
            },
            {
                name: "James",
                age: 19
            }
        ]
    },

        {
        name: "DiggaD",     
        age: 25,
        occupation: "Rapper",
        Image: "https://yt3.googleusercontent.com/N6r9DR5MlHotBicmM_wqZpYNvzK-sCgfKYKNfEK3XCdBH2vnIIQ6L_Tf2aoc_5yUo1py3bgpOxo=s900-c-k-c0x00ffffff-no-rj",
        children: [
            {
                name: "Digdat",
                age: 22
            }
        ]
    },

        {
        name: "Goliath",       
        age: 25,
        occupation: "Puncher",
        Image:"https://media.licdn.com/dms/image/v2/C5612AQER6upFwDszIQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1611868759371?e=2147483647&v=beta&t=K3VXyd_eqRAqIlJBaH19AhWByAMr8UPS1X9MHDZE9ns" ,
        children: [
            {
                name: "Huncho",
                age: 21
            },
            {
                name: "Yoyo",
                age: 211
            },
            {
                name: "May",
                age: 12
            }
        ]
    }
];

document.getElementById("container").innerHTML = people.map((person, index) => (`
    <div class="card">  
    <img src="${person.Image || ""}" alt="${person.name}" />
    <h3>${person.name}</h3> 
    <p>Age: ${person.age}</p>
    <p>Occupation: ${person.occupation}</p>
        <h4>Children:</h4>
        <ul>
        ${person.children.map(child => `<li>${child.name} ${child.age} years old</li>`)}
        </ul>
    </div>
`));

// console.log("people", people);