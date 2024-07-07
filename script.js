//your JS code here. If required.

  function delayedHello() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Hello, world!");
        }, 1000); // 1 second delay
      });
    }

    async function updateText() {
      const message = await delayedHello();
      document.getElementById('output').textContent = message;
    }

    // Call the updateText function to update the text after promise resolves
    updateText();
}