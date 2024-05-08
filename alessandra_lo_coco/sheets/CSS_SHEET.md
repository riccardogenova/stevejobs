div {
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
}

<link rel="stylesheet" type="text/css" href="myfile.css">

<style>
...il nostro CSS...
</style>

<div style="background-color: yellow">...</div>

p {
  color: yellow;
}

@import url(myfile.css) all;
@import url(myfile-screen.css) screen;
@import url(myfile-print.css) print;

p {
  color: rgb(255, 255, 255); /* white */
    background-color: rgb(0, 0, 0); /* black */
}

div {
  background-image: url(../test.png);
}


#name { display: block; } /* Che bella regola! */

/* #name { display: block; } */

#name {
    display: block; /*
    color: red;
    */
}

.container {
  margin: var(--default-margin, 30px);
}