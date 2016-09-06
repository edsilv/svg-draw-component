namespace IIIFComponents {
    export class SvgDrawComponent extends _Components.BaseComponent implements ISvgDrawComponent{

        public options: ISvgDrawComponentOptions;
        private _$canvas: JQuery;

        constructor(options: ISvgDrawComponentOptions) {
            super(options);

            this._init();
            this._resize();
        }

        public debug(): void {
            this._emit(SvgDrawComponent.Events.DEBUG, this.options.overlayType);
        }

        public addPoint(point): void {
            this._emit(SvgDrawComponent.Events.ADDPOINT, point);
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }

            this._$canvas = $('<canvas id="paper"></canvas>');
            this._$element.append(this._$canvas);
            //this._$element.append(this.options.overlayType);
            //this._$element.append(this.options.overlayType);
            return success;
        }


        protected _getDefaultOptions(): ISvgDrawComponentOptions {
            return <ISvgDrawComponentOptions>{
              overlayType: 'img',
            }
        }

        protected _resize(): void {

        }
    }
}

namespace IIIFComponents.SvgDrawComponent {
    export class Events {
        static DEBUG: string = 'debug';
        static ADDPOINT: string = 'addPoint';
    }
}

(function(w) {
    if (!w.IIIFComponents){
        w.IIIFComponents = IIIFComponents;
    } else {
        w.IIIFComponents.SvgDrawComponent = IIIFComponents.SvgDrawComponent;
    }
})(window);
