<!-- filter section -->
<div class="spacer"></div>
<div class="filter-section store-content">
        <div class="top-filter-div">
            <div class="item-container">
                <div id="cross-plat" class="x-container" onclick='xtreme("drop-plat")'>
                    <div class="draw-x"></div>
                    <div class="draw-x2"></div>
                </div>
                <div class="top-filter-item" onclick='toggleDropdown("drop-plat")' id="plat">
                    <div class="top-item-title"><h2 id="plat-text">Plataforma</h2></div>
                    <div class="top-item-arrow"></div>
                </div>
                <div class="dropdown" id="drop-plat">
                    <ul>
                        <li onclick='liPressed("drop-plat", "plat-text", "PlayStation")' class="first-li li" id="ps">PlayStation</li>
                        <li onclick='liPressed("drop-plat", "plat-text", "Xbox")' class="li" id="xbox">Xbox</li>
                        <li onclick='liPressed("drop-plat", "plat-text", "PC")' class="li" id="pc">PC</li>
                        <li onclick='liPressed("drop-plat", "plat-text", "Nintendo")' class="last-li li" id="nintendo">Nintendo</li>
                    </ul>
                </div>
            </div>
            
            <div class="item-container">
                <div id="cross-sist" class="x-container" onclick='xtreme("drop-sist")'>
                    <div class="draw-x"></div>
                    <div class="draw-x2"></div>
                </div>
                <div class="top-filter-item" onclick='toggleDropdown("drop-sist")'  id="sist">
                    <div class="top-item-title"><h2 id="sist-text">Sistema</h2></div>
                    <div class="top-item-arrow"></div>
                </div>
                <div class="dropdown" id="drop-sist">
                    <ul>
                        <li onclick='liPressed("drop-sist", "sist-text", "Juegos")' class="first-li li" id="juegos">Juegos</li>
                        <li onclick='liPressed("drop-sist", "sist-text", "Handheld")' class="li" id="handheld">Handheld</li>
                        <li onclick='liPressed("drop-sist", "sist-text", "Sobremesa")' class="li" id="sobremesa">Sobremesa</li>
                        <li onclick='liPressed("drop-sist", "sist-text", "Consolas")' class="last-li li" id="consolas">Consolas</li>
                    </ul>
                </div>
            </div>
            
            <div class="item-container">
                <div id="cross-gen" class="x-container" onclick='xtreme("drop-gen")'>
                    <div class="draw-x"></div>
                    <div class="draw-x2"></div>
                </div>
                <div class="top-filter-item" onclick='toggleDropdown("drop-gen")'  id="gen">
                    <div class="top-item-title"><h2 id="gen-text">Género</h2></div>
                    <div class="top-item-arrow"></div>
                </div>
                <div class="dropdown" id="drop-gen">
                    <ul>
                        <li onclick='liPressed("drop-gen", "gen-text", "Survival Horror")' class="first-li li" id="survival-horror">Survival Horror</li>
                        <li onclick='liPressed("drop-gen", "gen-text", "Souls-like")' class="li" id="souls-like">Souls-like</li>
                        <li onclick='liPressed("drop-gen", "gen-text", "Cooperativo")' class="li" id="cooperativo">Cooperativo</li>
                        <li onclick='liPressed("drop-gen", "gen-text", "Shooter")' class="li" id="shooter">Shooter</li>
                        <li onclick='liPressed("drop-gen", "gen-text", "Aventura")' class="last-li li" id="aventura">Aventura</li>
                    </ul>
                </div>
            </div>
            
            <div class="item-container">
                <div id="cross-sort" class="x-container" onclick='xtreme("drop-sort")'>
                    <div class="draw-x"></div>
                    <div class="draw-x2"></div>
                </div>
                <div class="top-filter-item" onclick='toggleDropdown("drop-sort")'  id="sort">
                    <div class="top-item-title"><h2 id="sort-text">Ordenar</h2></div>
                    <div class="top-item-arrow"></div>
                </div>
                <div class="dropdown" id="drop-sort">
                    <ul>
                        <li onclick='liPressed("drop-sort", "sort-text", "Precio Asc.")' class="first-li li" id="precio-ascendente">Precio Asc.</li>
                        <li onclick='liPressed("drop-sort", "sort-text", "Precio Desc.")' class="li" id="precio-descendente">Precio Desc.</li>
                        <li onclick='liPressed("drop-sort", "sort-text", "A - Z")' class="li" id="a-z">A - Z</li>
                        <li onclick='liPressed("drop-sort", "sort-text", "Z - A")' class="last-li li" id="z-a">Z - A</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lower-filter-div">
            <div class="lower-filter-item first-lower-item">
                <p class="dimm-text">Entre</p>
                <div class="price-box"><textarea placeholder="0" id="min-price" rows="1" cols="1" class="mytextarea" maxlength="4"></textarea></div>
                <p class="dimm-text">y</p>
                <div class="price-box"><textarea placeholder="100" id="max-price" rows="1" cols="1" class="mytextarea" maxlength="4"></textarea></div>
                <p class="dimm-text">€</p>
            </div>
            <div class="vertical-spacer"></div>
            <div class="lower-filter-item middle-lower-item" onclick="stockCheckBox()">
                <div id="stock-box"><div class="tick" id="tick"></div></div>
                <div id="stock-p"><p class="dimm-text"> En stock</p></div>
            </div>
            <div class="vertical-spacer"></div>
            <div class="top-filter-item last-lower-item" onclick="resetFilters()">
                <div class="top-item-title">
                    <h2>Reset filters</h2>
                </div>
            </div>
        </div>
    </div>