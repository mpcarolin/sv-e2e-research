## Playwright Example
* Helpful error:
```log
locator.click: Error: strict mode violation: "text=Attendees" resolved to 2 elements:
1) <a id="menu_8_01" class="users_view nav-link" href=…>Attendees</a> aka playwright.$("a:has-text("Attendees")")
2) <h5 class="left">…</h5> aka playwright.$("h5:has-text("Attendees")")

=========================== logs ===========================
waiting for selector "text=Attendees"
strict mode violation: "text=Attendees" resolved to 2 elements:
1) <a id="menu_8_01" class="users_view nav-link" href=…>Attendees</a> aka playwright.$("a:has-text("Attendees")")
2) <h5 class="left">…</h5> aka playwright.$("h5:has-text("Attendees")")
```


## NightWatch
* Nightwatch does NOT throw errors on multiple matches to elements by selector
* Instead it seems to just choose one (probably the first) and use that