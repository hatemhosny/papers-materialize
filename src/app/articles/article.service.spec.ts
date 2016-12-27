<div class="nav-wrapper">
    <div class="col s12 card-panel breadcrumb-panel blue">
        <a [routerLink]="['']" class="breadcrumb">Home</a>
        <a [routerLink]="['/articles']" class="breadcrumb">Articles</a>
        <a [routerLink]="['/article/1']" class="breadcrumb">Article 1</a>
    </div>
</div>


<div class="row card-panel">
    <div class="col s12">
        <ul class="tabs">
            <li class="tab col s3"><a [routerLink]="['.']" fragment="Article">Article</a></li>
            <li class="tab col s3"><a [routerLink]="['.']" fragment="Downloads">Downloads</a></li>
            <li class="tab col s3 disabled"><a [routerLink]="['.']" fragment="Disabled-Tab">Disabled Tab</a></li>
            <li class="tab col s3"><a [routerLink]="['.']" fragment="Related">Related</a></li>
        </ul>
    </div>
    <div id="Article" class="col s12">
        <p>This is supporting text.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
    </div>
    <div id="Downloads" class="col s12">Downloads...</div>
    <div id="Disabled-Tab" class="col s12">Disabled Tab</div>
    <div id="Related" class="col s12">Related content...</div>
</div>