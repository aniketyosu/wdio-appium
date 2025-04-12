describe('Android Elements Tests',  () => {
    it('find Element by Accessibility id', async () => {      
       //find element by accessibility id
       const appOption = await $('~App');

       //click on element
       await appOption.click();

       //assertion
       const actionBar = await $('~Action Bar')
       await expect(actionBar).toBeExisting();

    });

    it.only('find element by class name', async () => {
      //find element by classname
      const className = await $('android.widget.TextView')

      console.log(await className.getText())

      //Assertion
      await expect(className).toHaveText('API Demos')



    })
  });