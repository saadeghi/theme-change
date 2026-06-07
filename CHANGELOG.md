# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.1] (2026-06-07)

### Features

* unified theme control with `data-set-theme` for button, select, and checkbox
* added checkbox support: `<input type="checkbox" value="dark" data-set-theme />`
* added comma-separated rotation support on clickable `data-set-theme` values
* synced all `data-set-theme` controls on theme updates
* kept backward compatibility for legacy v2 attributes (`data-toggle-theme`, `data-choose-theme`)

### Build and distribution

* rewrote build pipeline with esbuild
* added dual artifacts:
	* browser-friendly IIFE `.js` files for classic `<script src>` CDN usage
	* ESM `.mjs` files for npm/module imports

### Docs and examples

* restructured README for shorter, easier scanning (quick start, framework snippets, tables)
* updated CDN docs for classic script usage
* expanded `index.html` examples for new API and legacy attribute coverage

## [2.5.0](https://github.com/saadeghi/theme-change/compare/v2.4.0...v2.5.0) (2023-03-03)

## [2.4.0](https://github.com/saadeghi/theme-change/compare/v1.2.0...v2.4.0) (2023-03-02)


### Bug Fixes

* empty theme value btn bug ([689d752](https://github.com/saadeghi/theme-change/commit/689d752baa9e34a50bad6ff664623c69a9a1f784))

### [2.0.2](https://github.com/saadeghi/theme-change/compare/v1.2.0...v2.0.2) (2021-04-30)


### Bug Fixes

* empty theme value btn bug ([689d752](https://github.com/saadeghi/theme-change/commit/689d752baa9e34a50bad6ff664623c69a9a1f784))
