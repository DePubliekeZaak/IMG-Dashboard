export class DashboardInfo {

    elementLabel  = document.querySelector('aside.info article h2.label') as HTMLElement;
    elementText = document.querySelector('aside.info article div') as HTMLElement;

    constructor() {

    }

    update(mapping)  {

        this.elementLabel.innerText = mapping[0].label;
        this.elementText.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique mauris ac efficitur vehicula. Nunc faucibus et ligula sed sodales. Etiam vulputate imperdiet pretium. Aliquam dapibus fermentum sagittis. Aliquam hendrerit at sem vehicula pellentesque. Nam commodo mi vitae fermentum iaculis. Ut aliquam at nulla vitae convallis. Suspendisse quis lacus ut quam auctor convallis. Etiam a ipsum sem.</p>

        <p>Curabitur sed sollicitudin neque. Aenean eleifend sapien eget varius vestibulum. Duis sit amet iaculis nisi, sit amet lacinia elit. Fusce in est dapibus, rhoncus diam id, mollis turpis. Mauris faucibus odio non mi tristique dignissim. Sed sit amet velit risus. Sed sed aliquam enim, eu iaculis nunc. Aenean mattis diam iaculis elit imperdiet, eget gravida lacus finibus. Morbi vitae maximus nibh. Proin bibendum lobortis condimentum.</p>
                
        `

    }





}