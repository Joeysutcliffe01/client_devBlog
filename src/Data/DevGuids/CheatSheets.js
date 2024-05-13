
export const JsCheatSheet = [
    {
        name:"JavaScript",
        shortName:"JS",
        icon:"",
        descriptionShort:"",
        descriptionLong:"JavaScript is a scripting language that allows you to implement complex features on web pages: displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. You can bet that JavaScript is probably involved.",
        cheetSheet:[
            {
                group:[
                    {
                        name:"Alerts & Prompts",
                        exampleType:[
                            {
                                name: "Alert",
                                example: 
                                `
                                alert("Olá");
                                let name = "Angela";
                                alert(name);
                                `
                            },
                            {
                                name: "Prompt",
                                example: 
                                `
                                let firstName = prompt("What is your first name");
                                let lastName = prompt("What is your last name");
                                let fullName = firstName + " " + lastName;
                                alert(fullName);
                                `
                            }
                        ]
                    },
                    {
                        name:"If else",
                        exampleType:[
                            {
                                name: "if statement",
                                example: 
                                `
                                let country = prompt("What country are you from?");

                                if (country === "Portugal") {
                                  alert("You are cool");
                                }
                                
                                if (country !== "Portugal") {
                                  alert("Too bad for you");
                                }
                                `
                            },
                            {
                                name: "if else statement",
                                example: 
                                `
                                let age = prompt("How old are you?");

                                if (age < 18) {
                                  alert("You cannot apply");
                                } else {
                                  alert("You can apply");
                                }
                                `
                            }
                        ]
                    },

                ]

            }
        ]
    }
]

export const ReactCheatSheet = [
    {
        name:"React",
        shortName:"JS",
        icon:"",
        descriptionShort:"",
        descriptionLong:"React is a JavaScript library for building user interfaces. This guide targets React v15 to v16.",
        cheetSheet:[
            {
                group:[
                    {
                        name:"Components",
                        exampleType:[
                            {
                                name: "Alert",
                                example: 
                                `
                                alert("Olá");
                                let name = "Angela";
                                alert(name);
                                `
                            },
                            {
                                name: "Prompt",
                                example: 
                                `
                                let firstName = prompt("What is your first name");
                                let lastName = prompt("What is your last name");
                                let fullName = firstName + " " + lastName;
                                alert(fullName);
                                `
                            }
                        ]
                    },
                    {
                        name:"If else",
                        exampleType:[
                            {
                                name: "if statement",
                                example: 
                                `
                                let country = prompt("What country are you from?");

                                if (country === "Portugal") {
                                  alert("You are cool");
                                }
                                
                                if (country !== "Portugal") {
                                  alert("Too bad for you");
                                }
                                `
                            },
                            {
                                name: "if else statement",
                                example: 
                                `
                                let age = prompt("How old are you?");

                                if (age < 18) {
                                  alert("You cannot apply");
                                } else {
                                  alert("You can apply");
                                }
                                `
                            }
                        ]
                    },

                ]

            }
        ]
    }
]
