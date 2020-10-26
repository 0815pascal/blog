---
path: handling-multiple-variables-in-react
date: 2020-10-24T20:11:33.938Z
title: Handling multiple variables in React
description: How can we handle multiple states in React and save them to a database?
---
Recently I was trying to setup an instance of [Leaflet](https://leafletjs.com/) in order to display a map-leaflet in [our editor](https://github.com/wepublish/wepublish/). In a settings-panel, the user should be able to choose the latitude and longitude of a marker point on the map, as well as choose the appropriate zoom-level. 

I therefore started by creating three text-input-fields

```javascript
<TextInput
          marginBottom={Spacing.ExtraSmall}
          type="number"
          label={t('blocks.mapLeaflet.panels.latitude')}
          value={centerLat}
          onChange={e => setCenterLat(parseInt(e.target.value))}
          required
        />
        <TextInput
          marginBottom={Spacing.ExtraSmall}
          type="number"
          label={t('blocks.mapLeaflet.panels.longitude')}
          value={centerLng}
          onChange={e => setCenterLng(parseInt(e.target.value))}
          required
        />
        <TextInput
          marginBottom={Spacing.ExtraSmall}
          type="number"
          label={t('blocks.mapLeaflet.panels.zoom')}
          value={zoomLevel}
          onChange={e => setZoomLevel(parseInt(e.target.value))}
          required
        />
```

whose values then would be saved into a state variable via [React's](https://reactjs.org/docs/hooks-state.html) `useState`-method. 

```javascript
  const [zoomLevel, setZoomLevel] = useState<number>(mapLeaflet.zoom)
  const [centerLat, setCenterLat] = useState<number>(mapLeaflet.centerLat)
  const [centerLng, setCenterLng] = useState<number>(mapLeaflet.centerLng)
```

Upon hitting a confirm button, the map-leaflet and the values stored in the state variables should be saved. However, I didn't know how I could pass these three states into `onClick` respectively the `onConfirm`-method. 

Turns out the answer is rather simple: I could do this by creating an **object** and passing it the values stored in the state variables. 

*Note: [with JS Version ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) you can save variables that have the same name as the object property by simply writing it once like `centerLat` instead of `centerLat: centerLat`.* 

```javascript
<NavigationButton
            icon={MaterialIconCheck}
            label={t('blocks.mapLeaflet.panels.confirm')}
            onClick={() =>
              onConfirm?.({
                zoom: zoomLevel,
                centerLat,
                centerLng,
                items
              })
            }
          />
```
In order to know which properties the `onConfirm`-method needs, we can look it up in the interface-definition: 

```javascript
export interface MapLeafletEditPanel {
  mapLeaflet: MapLeafletBlockValue
  onClose(): void
  onConfirm?(mapLeaflet: MapLeafletBlockValue): void
}

export interface MapLeafletBlockValue {
  centerLat: number
  centerLng: number
  zoom: number
  caption?: string
  items: ListValue<MapLeafletItem>[]
}
```
Here it also becomes clear why I had to write `zoom: zoomLevel` instead of just `zoom` since here the variable name and the property name are not the same. 
