const p = new Promise((resolve, reject) => {
    const success = false;
    if (success) resolve("Yay!");
    else reject("Oops!");
});

p.then(result => console.log("Success:", result))
 .catch(err => console.log("Error:", err));
