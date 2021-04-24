# HTML & SCSS COMPONENTS LIBRARY

## Installation

1. `npm i ig-components-library`

2. `Make sure that you have scss base, colors, mixins folders in your project with the required files`

### Components

#### Navbars

##### Simple Navbar Sliding From Top To Bottom. _Outline on hover_

**Impport appropriate SCSS file:**
```
@import './path/to/file/../node_modules/ig-components-library/scss/navbars/nav-v1-snttb/snttb'
@import './path/to/file/../node_modules/ig-components-library/scss/navbars/nav-v1-snttb/snttbc'
```


**Copy php template file to your template-parts:**


```
'./path/to/file/../node_modules/ig-components-library/php/navbars/templates/nav-v1-snttb'
```


**Copy walker class to your inc:**


```
'./path/to/file/../node_modules/ig-components-library/php/navbars/walkers/nav-v1-snttb'
```

**Require walker in your functions.php:**


```
    require_once get_template_directory() . '/inc/walkers/nav-v1-snttb/snttb-walker.php';
    require_once get_template_directory() . '/inc/walkers/nav-v1-snttb/snttbc-walker.php';
```

**Import JS files:**


```
import {addFunctionalityToIgNavbarSnttb} from './path/to/file/../node_modules/ig-components-library/js/navbars/nav-v1-snttb/snttb'
import {addFunctionalityToIgNavbarSnttbc} from './path/to/file/../node_modules/ig-components-library/js/navbars/nav-v1-snttb/snttbc'
```