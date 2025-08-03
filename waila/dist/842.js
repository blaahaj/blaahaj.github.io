"use strict";
(self["webpackChunk_blaahaj_waila"] = self["webpackChunk_blaahaj_waila"] || []).push([[842],{

/***/ 842:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AttributionControl: () => (/* reexport */ AttributionControl),
  Circle: () => (/* reexport */ Circle),
  CircleMarker: () => (/* reexport */ CircleMarker),
  FeatureGroup: () => (/* reexport */ FeatureGroup),
  GeoJSON: () => (/* reexport */ GeoJSON),
  ImageOverlay: () => (/* reexport */ ImageOverlay),
  LayerGroup: () => (/* reexport */ LayerGroup),
  LayersControl: () => (/* reexport */ LayersControl),
  MapContainer: () => (/* reexport */ MapContainer/* MapContainer */.W),
  Marker: () => (/* reexport */ Marker/* Marker */.p),
  Pane: () => (/* reexport */ Pane),
  Polygon: () => (/* reexport */ Polygon),
  Polyline: () => (/* reexport */ Polyline),
  Popup: () => (/* reexport */ Popup),
  Rectangle: () => (/* reexport */ Rectangle),
  SVGOverlay: () => (/* reexport */ SVGOverlay),
  ScaleControl: () => (/* reexport */ ScaleControl/* ScaleControl */.g),
  TileLayer: () => (/* reexport */ TileLayer/* TileLayer */.e),
  Tooltip: () => (/* reexport */ Tooltip),
  VideoOverlay: () => (/* reexport */ VideoOverlay),
  WMSTileLayer: () => (/* reexport */ WMSTileLayer),
  ZoomControl: () => (/* reexport */ ZoomControl),
  useMap: () => (/* reexport */ hooks/* useMap */.ko),
  useMapEvent: () => (/* reexport */ hooks/* useMapEvent */.gY),
  useMapEvents: () => (/* reexport */ hooks/* useMapEvents */.Po)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/hooks.js
var hooks = __webpack_require__(3166);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/generic.js + 2 modules
var generic = __webpack_require__(8530);
// EXTERNAL MODULE: external "L"
var external_L_ = __webpack_require__(5525);
;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/AttributionControl.js


const AttributionControl = (0,generic/* createControlComponent */.T7)(function createAttributionControl(props) {
    return new external_L_.Control.Attribution(props);
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/element.js
var lib_element = __webpack_require__(6006);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/context.js
var lib_context = __webpack_require__(3277);
;// ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/circle.js
function updateCircle(layer, props, prevProps) {
    if (props.center !== prevProps.center) {
        layer.setLatLng(props.center);
    }
    if (props.radius != null && props.radius !== prevProps.radius) {
        layer.setRadius(props.radius);
    }
}

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Circle.js


const Circle = (0,generic/* createPathComponent */.Lt)(function createCircle({ center , children: _c , ...options }, ctx) {
    const circle = new external_L_.Circle(center, options);
    return (0,lib_element/* createElementObject */.Q)(circle, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: circle
    }));
}, updateCircle);

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/CircleMarker.js


const CircleMarker = (0,generic/* createPathComponent */.Lt)(function createCircleMarker({ center , children: _c , ...options }, ctx) {
    const marker = new external_L_.CircleMarker(center, options);
    return (0,lib_element/* createElementObject */.Q)(marker, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: marker
    }));
}, updateCircle);

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/FeatureGroup.js


const FeatureGroup = (0,generic/* createPathComponent */.Lt)(function createFeatureGroup({ children: _c , ...options }, ctx) {
    const group = new external_L_.FeatureGroup([], options);
    return (0,lib_element/* createElementObject */.Q)(group, (0,lib_context/* extendContext */.W4)(ctx, {
        layerContainer: group,
        overlayContainer: group
    }));
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/GeoJSON.js


const GeoJSON = (0,generic/* createPathComponent */.Lt)(function createGeoJSON({ data , ...options }, ctx) {
    const geoJSON = new external_L_.GeoJSON(data, options);
    return (0,lib_element/* createElementObject */.Q)(geoJSON, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: geoJSON
    }));
}, function updateGeoJSON(layer, props, prevProps) {
    if (props.style !== prevProps.style) {
        if (props.style == null) {
            layer.resetStyle();
        } else {
            layer.setStyle(props.style);
        }
    }
});

;// ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/media-overlay.js

function updateMediaOverlay(overlay, props, prevProps) {
    if (props.bounds instanceof external_L_.LatLngBounds && props.bounds !== prevProps.bounds) {
        overlay.setBounds(props.bounds);
    }
    if (props.opacity != null && props.opacity !== prevProps.opacity) {
        overlay.setOpacity(props.opacity);
    }
    if (props.zIndex != null && props.zIndex !== prevProps.zIndex) {
        // @ts-ignore missing in definition but inherited from ImageOverlay
        overlay.setZIndex(props.zIndex);
    }
}

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/ImageOverlay.js


const ImageOverlay = (0,generic/* createLayerComponent */.Nq)(function createImageOveraly({ bounds , url , ...options }, ctx) {
    const overlay = new external_L_.ImageOverlay(url, bounds, options);
    return (0,lib_element/* createElementObject */.Q)(overlay, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: overlay
    }));
}, function updateImageOverlay(overlay, props, prevProps) {
    updateMediaOverlay(overlay, props, prevProps);
    if (props.bounds !== prevProps.bounds) {
        const bounds = props.bounds instanceof external_L_.LatLngBounds ? props.bounds : new external_L_.LatLngBounds(props.bounds);
        overlay.setBounds(bounds);
    }
    if (props.url !== prevProps.url) {
        overlay.setUrl(props.url);
    }
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/LayerGroup.js


const LayerGroup = (0,generic/* createLayerComponent */.Nq)(function createLayerGroup({ children: _c , ...options }, ctx) {
    const group = new external_L_.LayerGroup([], options);
    return (0,lib_element/* createElementObject */.Q)(group, (0,lib_context/* extendContext */.W4)(ctx, {
        layerContainer: group
    }));
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/control.js
var control = __webpack_require__(6059);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/component.js
var component = __webpack_require__(2409);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1594);
;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/LayersControl.js



const useLayersControlElement = (0,lib_element/* createElementHook */.K)(function createLayersControl({ children: _c , ...options }, ctx) {
    const control = new external_L_.Control.Layers(undefined, undefined, options);
    return (0,lib_element/* createElementObject */.Q)(control, (0,lib_context/* extendContext */.W4)(ctx, {
        layersControl: control
    }));
}, function updateLayersControl(control, props, prevProps) {
    if (props.collapsed !== prevProps.collapsed) {
        if (props.collapsed === true) {
            control.collapse();
        } else {
            control.expand();
        }
    }
});
const useLayersControl = (0,control/* createControlHook */.T)(useLayersControlElement);
// @ts-ignore
const LayersControl = (0,component/* createContainerComponent */.B7)(useLayersControl);
function createControlledLayer(addLayerToControl) {
    return function ControlledLayer(props) {
        const parentContext = (0,lib_context/* useLeafletContext */.U$)();
        const propsRef = (0,external_React_.useRef)(props);
        const [layer, setLayer] = (0,external_React_.useState)(null);
        const { layersControl , map  } = parentContext;
        const addLayer = (0,external_React_.useCallback)((layerToAdd)=>{
            if (layersControl != null) {
                if (propsRef.current.checked) {
                    map.addLayer(layerToAdd);
                }
                addLayerToControl(layersControl, layerToAdd, propsRef.current.name);
                setLayer(layerToAdd);
            }
        }, [
            layersControl,
            map
        ]);
        const removeLayer = (0,external_React_.useCallback)((layerToRemove)=>{
            layersControl?.removeLayer(layerToRemove);
            setLayer(null);
        }, [
            layersControl
        ]);
        const context = (0,external_React_.useMemo)(()=>{
            return (0,lib_context/* extendContext */.W4)(parentContext, {
                layerContainer: {
                    addLayer,
                    removeLayer
                }
            });
        }, [
            parentContext,
            addLayer,
            removeLayer
        ]);
        (0,external_React_.useEffect)(()=>{
            if (layer !== null && propsRef.current !== props) {
                if (props.checked === true && (propsRef.current.checked == null || propsRef.current.checked === false)) {
                    map.addLayer(layer);
                } else if (propsRef.current.checked === true && (props.checked == null || props.checked === false)) {
                    map.removeLayer(layer);
                }
                propsRef.current = props;
            }
        });
        return props.children ? /*#__PURE__*/ external_React_.createElement(lib_context/* LeafletProvider */.hL, {
            value: context
        }, props.children) : null;
    };
}
LayersControl.BaseLayer = createControlledLayer(function addBaseLayer(layersControl, layer, name) {
    layersControl.addBaseLayer(layer, name);
});
LayersControl.Overlay = createControlledLayer(function addOverlay(layersControl, layer, name) {
    layersControl.addOverlay(layer, name);
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/MapContainer.js
var MapContainer = __webpack_require__(5393);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Marker.js
var Marker = __webpack_require__(4898);
;// ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/dom.js

function splitClassName(className) {
    return className.split(' ').filter(Boolean);
}
function addClassName(element, className) {
    splitClassName(className).forEach((cls)=>{
        external_L_.DomUtil.addClass(element, cls);
    });
}
function removeClassName(element, className) {
    splitClassName(className).forEach((cls)=>{
        DomUtil.removeClass(element, cls);
    });
}
function updateClassName(element, prevClassName, nextClassName) {
    if (element != null && nextClassName !== prevClassName) {
        if (prevClassName != null && prevClassName.length > 0) {
            removeClassName(element, prevClassName);
        }
        if (nextClassName != null && nextClassName.length > 0) {
            addClassName(element, nextClassName);
        }
    }
}

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(5206);
;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Pane.js



const DEFAULT_PANES = [
    'mapPane',
    'markerPane',
    'overlayPane',
    'popupPane',
    'shadowPane',
    'tilePane',
    'tooltipPane'
];
function omitPane(obj, pane) {
    const { [pane]: _p , ...others } = obj;
    return others;
}
function createPane(name, props, context) {
    if (DEFAULT_PANES.indexOf(name) !== -1) {
        throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${name}`);
    }
    if (context.map.getPane(name) != null) {
        throw new Error(`A pane with this name already exists: ${name}`);
    }
    const parentPaneName = props.pane ?? context.pane;
    const parentPane = parentPaneName ? context.map.getPane(parentPaneName) : undefined;
    const element = context.map.createPane(name, parentPane);
    if (props.className != null) {
        addClassName(element, props.className);
    }
    if (props.style != null) {
        Object.keys(props.style).forEach((key)=>{
            // @ts-ignore
            element.style[key] = props.style[key];
        });
    }
    return element;
}
function PaneComponent(props, forwardedRef) {
    const [paneName] = (0,external_React_.useState)(props.name);
    const [paneElement, setPaneElement] = (0,external_React_.useState)(null);
    (0,external_React_.useImperativeHandle)(forwardedRef, ()=>paneElement, [
        paneElement
    ]);
    const context = (0,lib_context/* useLeafletContext */.U$)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const newContext = (0,external_React_.useMemo)(()=>({
            ...context,
            pane: paneName
        }), [
        context
    ]);
    (0,external_React_.useEffect)(()=>{
        setPaneElement(createPane(paneName, props, context));
        return function removeCreatedPane() {
            const pane = context.map.getPane(paneName);
            pane?.remove?.();
            // @ts-ignore map internals
            if (context.map._panes != null) {
                // @ts-ignore map internals
                context.map._panes = omitPane(context.map._panes, paneName);
                // @ts-ignore map internals
                context.map._paneRenderers = omitPane(// @ts-ignore map internals
                context.map._paneRenderers, paneName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return props.children != null && paneElement != null ? /*#__PURE__*/ (0,external_ReactDOM_.createPortal)(/*#__PURE__*/ external_React_.createElement(lib_context/* LeafletProvider */.hL, {
        value: newContext
    }, props.children), paneElement) : null;
}
const Pane = /*#__PURE__*/ (0,external_React_.forwardRef)(PaneComponent);

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Polygon.js


const Polygon = (0,generic/* createPathComponent */.Lt)(function createPolygon({ positions , ...options }, ctx) {
    const polygon = new external_L_.Polygon(positions, options);
    return (0,lib_element/* createElementObject */.Q)(polygon, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: polygon
    }));
}, function updatePolygon(layer, props, prevProps) {
    if (props.positions !== prevProps.positions) {
        layer.setLatLngs(props.positions);
    }
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Polyline.js


const Polyline = (0,generic/* createPathComponent */.Lt)(function createPolyline({ positions , ...options }, ctx) {
    const polyline = new external_L_.Polyline(positions, options);
    return (0,lib_element/* createElementObject */.Q)(polyline, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: polyline
    }));
}, function updatePolyline(layer, props, prevProps) {
    if (props.positions !== prevProps.positions) {
        layer.setLatLngs(props.positions);
    }
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Popup.js



const Popup = (0,generic/* createOverlayComponent */.wk)(function createPopup(props, context) {
    const popup = new external_L_.Popup(props, context.overlayContainer);
    return (0,lib_element/* createElementObject */.Q)(popup, context);
}, function usePopupLifecycle(element, context, { position  }, setOpen) {
    (0,external_React_.useEffect)(function addPopup() {
        const { instance  } = element;
        function onPopupOpen(event) {
            if (event.popup === instance) {
                instance.update();
                setOpen(true);
            }
        }
        function onPopupClose(event) {
            if (event.popup === instance) {
                setOpen(false);
            }
        }
        context.map.on({
            popupopen: onPopupOpen,
            popupclose: onPopupClose
        });
        if (context.overlayContainer == null) {
            // Attach to a Map
            if (position != null) {
                instance.setLatLng(position);
            }
            instance.openOn(context.map);
        } else {
            // Attach to container component
            context.overlayContainer.bindPopup(instance);
        }
        return function removePopup() {
            context.map.off({
                popupopen: onPopupOpen,
                popupclose: onPopupClose
            });
            context.overlayContainer?.unbindPopup();
            context.map.removeLayer(instance);
        };
    }, [
        element,
        context,
        setOpen,
        position
    ]);
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Rectangle.js


const Rectangle = (0,generic/* createPathComponent */.Lt)(function createRectangle({ bounds , ...options }, ctx) {
    const rectangle = new external_L_.Rectangle(bounds, options);
    return (0,lib_element/* createElementObject */.Q)(rectangle, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: rectangle
    }));
}, function updateRectangle(layer, props, prevProps) {
    if (props.bounds !== prevProps.bounds) {
        layer.setBounds(props.bounds);
    }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/ScaleControl.js
var ScaleControl = __webpack_require__(3347);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/layer.js
var lib_layer = __webpack_require__(235);
;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/SVGOverlay.js




const useSVGOverlayElement = (0,lib_element/* createElementHook */.K)(function createSVGOverlay(props, context) {
    const { attributes , bounds , ...options } = props;
    const container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    container.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    if (attributes != null) {
        Object.keys(attributes).forEach((name)=>{
            container.setAttribute(name, attributes[name]);
        });
    }
    const overlay = new external_L_.SVGOverlay(container, bounds, options);
    return (0,lib_element/* createElementObject */.Q)(overlay, context, container);
}, updateMediaOverlay);
const useSVGOverlay = (0,lib_layer/* createLayerHook */.V)(useSVGOverlayElement);
function SVGOverlayComponent({ children , ...options }, forwardedRef) {
    const { instance , container  } = useSVGOverlay(options).current;
    (0,external_React_.useImperativeHandle)(forwardedRef, ()=>instance);
    return container == null || children == null ? null : /*#__PURE__*/ (0,external_ReactDOM_.createPortal)(children, container);
}
const SVGOverlay = /*#__PURE__*/ (0,external_React_.forwardRef)(SVGOverlayComponent);

// EXTERNAL MODULE: ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/TileLayer.js
var TileLayer = __webpack_require__(7951);
;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/Tooltip.js



const Tooltip = (0,generic/* createOverlayComponent */.wk)(function createTooltip(props, context) {
    const tooltip = new external_L_.Tooltip(props, context.overlayContainer);
    return (0,lib_element/* createElementObject */.Q)(tooltip, context);
}, function useTooltipLifecycle(element, context, { position  }, setOpen) {
    (0,external_React_.useEffect)(function addTooltip() {
        const container = context.overlayContainer;
        if (container == null) {
            return;
        }
        const { instance  } = element;
        const onTooltipOpen = (event)=>{
            if (event.tooltip === instance) {
                if (position != null) {
                    instance.setLatLng(position);
                }
                instance.update();
                setOpen(true);
            }
        };
        const onTooltipClose = (event)=>{
            if (event.tooltip === instance) {
                setOpen(false);
            }
        };
        container.on({
            tooltipopen: onTooltipOpen,
            tooltipclose: onTooltipClose
        });
        container.bindTooltip(instance);
        return function removeTooltip() {
            container.off({
                tooltipopen: onTooltipOpen,
                tooltipclose: onTooltipClose
            });
            // @ts-ignore protected property
            if (container._map != null) {
                container.unbindTooltip();
            }
        };
    }, [
        element,
        context,
        setOpen,
        position
    ]);
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/VideoOverlay.js


const VideoOverlay = (0,generic/* createLayerComponent */.Nq)(function createVideoOverlay({ bounds , url , ...options }, ctx) {
    const overlay = new external_L_.VideoOverlay(url, bounds, options);
    if (options.play === true) {
        overlay.getElement()?.play();
    }
    return (0,lib_element/* createElementObject */.Q)(overlay, (0,lib_context/* extendContext */.W4)(ctx, {
        overlayContainer: overlay
    }));
}, function updateVideoOverlay(overlay, props, prevProps) {
    updateMediaOverlay(overlay, props, prevProps);
    if (typeof props.url === 'string' && props.url !== prevProps.url) {
        overlay.setUrl(props.url);
    }
    const video = overlay.getElement();
    if (video != null) {
        if (props.play === true && !prevProps.play) {
            video.play();
        } else if (!props.play && prevProps.play === true) {
            video.pause();
        }
    }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/pane.js
var pane = __webpack_require__(5142);
// EXTERNAL MODULE: ./node_modules/.pnpm/@react-leaflet+core@2.1.0_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-leaflet/core/lib/grid-layer.js
var grid_layer = __webpack_require__(4688);
;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/WMSTileLayer.js


const WMSTileLayer = (0,generic/* createTileLayerComponent */.X3)(function createWMSTileLayer({ eventHandlers: _eh , params ={} , url , ...options }, context) {
    const layer = new external_L_.TileLayer.WMS(url, {
        ...params,
        ...(0,pane/* withPane */.P)(options, context)
    });
    return (0,lib_element/* createElementObject */.Q)(layer, context);
}, function updateWMSTileLayer(layer, props, prevProps) {
    (0,grid_layer/* updateGridLayer */.X)(layer, props, prevProps);
    if (props.params != null && props.params !== prevProps.params) {
        layer.setParams(props.params);
    }
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/ZoomControl.js


const ZoomControl = (0,generic/* createControlComponent */.T7)(function createZoomControl(props) {
    return new external_L_.Control.Zoom(props);
});

;// ./node_modules/.pnpm/react-leaflet@4.2.1_leaflet@1.9.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-leaflet/lib/index.js

























/***/ })

}]);
//# sourceMappingURL=842.js.map