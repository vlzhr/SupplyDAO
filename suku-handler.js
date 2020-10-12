let item;
let data;
const TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqbUVPTlJIVDBUeW0wVy15M3NKYi02WEFTbTdhQXVjT2FPWUZ3N2E5RENjIn0.eyJqdGkiOiIzOGQ5YTQyOS1mNDUyLTQzMWItODEzZS03YWUxOWI4ZjBkOGEiLCJleHAiOjE2MDI0NzQ0NDUsIm5iZiI6MCwiaWF0IjoxNjAyNDc0MTQ1LCJpc3MiOiJodHRwczovL2tleWNsb2FrLnN1a3UubmV0d29yay9hdXRoL3JlYWxtcy9zdWt1LW1hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiNjczNDNjNy0yYzE3LTQyYTctOTJmOS0wNmI2YjdlNGNmMDIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJkZXZraXQtYWxwaGEiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI4ZWRjMGQ1ZC0zOGVhLTRlZTktOWFlNy04MzBhNTMxOTgzZDMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImRldmtpdC1hbHBoYSJ9.edbWgvLBYQIAHUNrjFbU5lDja9mawTkWtGWwJkJKpwevGHmRBIMNsfaogJiPMUzmzIhKjFTWVKavSObpoEAnIC5xUdLXfUoycLcbgeiY22pgZjlvbCRMUrFI1OJEAUNrfV-NlsHwWaurOK1kN4sVQav8sOQjYKIx07yvcjfj4qLzvOAWwCdiMWOSoKrTrtyKi2-aRJmBSRpCwncDT9BgvV5qEfTeCIh5atUe8lNj1GrNHbq04245-44DK22ELu7BxKJ3pS0rdQv4HJ6QwB2mZ2HIUDHOR6AYYvaDa3q0_r4RR98rYJyx5I4aeeKJrNx7yJOs3EjL6l_zaMaQbog0ug";

function renderItem(item) {
    function q(i) { return document.querySelector(i); }

    q(".gallery").style.display = "none";
    q(".selected").style.display = "block";

    q(".form-1").style.display = "none";
    q(".form-2").style.display = "block";

    q(".sel-name").innerText = item.name;
    q(".sel-date").innerText = item.createdAt.split("T")[0];
}


function onLoad() {
    data = JSON.parse(this.responseText);
    const li = data.data;
    for (const i of li) {
        if (i["_id"] === item) {
            item = i;
            renderItem(i);
        }
    }
}


function getItemById(iid) {
    item = iid;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", onLoad);
    xhr.open("GET", "https://devkit-alpha.suku.network/api/assetcatalog/assets");
    xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);
    xhr.send();
}




