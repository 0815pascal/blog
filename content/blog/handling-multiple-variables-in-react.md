---
path: handling-multiple-variables-in-react
date: 2020-10-24T20:11:33.938Z
title: Handling multiple variables in React
description: How can we handle multiple states in React and save them to a database?
---


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



```javascript
  const [zoomLevel, setZoomLevel] = useState<number>(mapLeaflet.zoom)
  const [centerLat, setCenterLat] = useState<number>(mapLeaflet.centerLat)
  const [centerLng, setCenterLng] = useState<number>(mapLeaflet.centerLng)
```

```javascript
export interface MapLeafletEditPanel {
  mapLeaflet: MapLeafletBlockValue
  onClose(): void
  onConfirm?(mapLeaflet: MapLeafletBlockValue): void
}
```

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