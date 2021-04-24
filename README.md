# HTML & SCSS COMPONENTS LIBRARY

## Installation

1. `npm i ig-components-library`

2. `Make sure that you have scss base, colors, mixins folders in your project with the required files`


#### Components
<details>

 <summary>Overlays</summary>

 1.  Sliding From Two Sides

 ```
@import './path/to/file/../node_modules/ig-components-library/scss/components/overlays/overlay__sliding-from-two-sides/overlay__sliding-from-two-sides
 ```

 </details>

<details>

 <summary>Buttons</summary>

<details>

 <summary>Hamburger</summary>

 1.  General Hamburger Button

 ```
@import './path/to/file/../node_modules/ig-components-library/scss/components/buttons/btn-hamburger/btn-hamburger__general
 ```

 </details>

 </details>



### Templates

#### Navbars
<details>

 <summary>Simple Navbar Sliding From Top To Bottom. Outline on hover </summary>

Current navbars awailable:

    $navbar_name = 'snttbc';
    $navbar_name = 'snttb';


**Impport appropriate SCSS file:**
```
@import './path/to/file/../node_modules/ig-components-library/scss/navbars/nav-v1-snttb/snttb'
@import './path/to/file/../node_modules/ig-components-library/scss/navbars/nav-v1-snttb/snttbc'
```

**Copy and paste your customization file:**

```
 './custom/snttb-custom';
 './custom/snttbc-custom';
```

Change the customization file any way you please to style your navbar.

**Copy php template file to your template-parts:**


```
'./path/to/file/../node_modules/ig-components-library/php/navbars/templates/nav-v1-snttb/snttb-all.php'
```

Set the `$navbar_name` to the desired navbar, corresponding with the scss file name.


**Copy walker class to your inc:**


```
'./path/to/file/../node_modules/ig-components-library/php/navbars/walkers/nav-v1-snttb/snttb-walker-all.php'
```

Set the `$navbar_name` to the desired navbar, corresponding with the scss file name.


**Require walker in your functions.php:**


```
require_once get_template_directory() . '/inc/walkers/nav-v1-snttb/snttb-walker-all.php';
```

**Import JS files:**


```
import { addFunctionalityToIgNavbarSNTTB } from './path/to/file/../node_modules/ig-components-library/js/navbars/nav-v1-snttb/snttb-all'
```

addFunctionalityToIgNavbarSNTTB arguments: 


navName - your chosen navbar name


dropdownOnClickOnly - true or false, 
                      if chosen true, dropdown opens only
                      on click, not hover


breakpoint - specify the main breakpoint of the navbar (corresponding to  $navbar-breakpoint-main variable in base.scss)

</details>



