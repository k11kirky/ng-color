import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
var convert = require('color-convert');
//import * as convert from 'color-convert';
import { Colors } from './sample.component';

@Component({
    selector: 'ionic-color-picker',
    template: `
        <div class="ionic-color-picker">
            <div class="arrow arrow-{{cpPosition}}" [style.top.px]="arrowTop"></div>

            <div class="saturation-lightness">
                <!--<div [style.left.px]="slider.s" [style.top.px]="slider.v" class="cursor"></div>-->
            </div>
            <!--<div class="box">
                <div class="left">
                    <div class="selected-color-background"></div>
                    <div [style.background-color]="selectedColor" class="selected-color"></div>
                </div>
                <div class="right">
                    <div *ngIf="cpAlphaChannel==='disabled'" style="height: 18px;"></div>
                    
                    <div [slider] [rgX]="1" (newValue)="setHue($event)" class="hue" #hueSlider>
                        <div [style.left.px]="slider.h" class="cursor"></div>
                    </div>
                    
                    <div [hidden]="cpAlphaChannel==='disabled'" [slider] [style.background-color]="alphaSliderColor" [rgX]="1" (newValue)="setAlpha($event)" class="alpha" #alphaSlider>
                        <div [style.left.px]="slider.a" class="cursor"></div>
                    </div>
                </div>
            </div>

            <div [hidden]="format!=2" class="hsla-text">
                <div class="box">
                    <input [text] type="number" pattern="[0-9]*" min="0" max="360" [rg]="360" (newValue)="setHue($event)" [value]="hslaText.h"/>
                    <input [text] type="number" pattern="[0-9]*" min="0" max="100" [rg]="100" (newValue)="setSaturation($event)" [value]="hslaText.s"/>
                    <input [text] type="number" pattern="[0-9]*" min="0" max="100" [rg]="100" (newValue)="setLightness($event)" [value]="hslaText.l"/>
                    <input *ngIf="cpAlphaChannel!=='disabled'" [text] type="number" pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [rg]="1" (newValue)="setAlpha($event)" [value]="hslaText.a"/>
                </div>
                <div class="box">
                    <div>H</div><div>S</div><div>L</div><div *ngIf="cpAlphaChannel!=='disabled'">A</div>
                </div>
            </div>

            <div [hidden]="format!=1" class="rgba-text">
                <div class="box">
                    <input [text] type="number" pattern="[0-9]*" min="0" max="255" [rg]="255" (newValue)="setR($event)" [value]="rgbaText.r"/>
                    <input [text] type="number" pattern="[0-9]*" min="0" max="255" [rg]="255" (newValue)="setG($event)" [value]="rgbaText.g"/>
                    <input [text] type="number" pattern="[0-9]*" min="0" max="255" [rg]="255" (newValue)="setB($event)" [value]="rgbaText.b"/>
                    <input *ngIf="cpAlphaChannel!=='disabled'" [text] type="number" pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [rg]="1" (newValue)="setAlpha($event)" [value]="rgbaText.a"/>
                </div>
                <div class="box">
                    <div>R</div><div>G</div><div>B</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
                </div>
            </div>

            <div [hidden]="format!=0" class="hex-text">
                <div class="box">
                    <input [text] (newValue)="setColorFromString($event)" [value]="hexText"/>
                </div>
                <div class="box">
                    <div>Hex</div>
                </div>
            </div>

            <div (click)="formatPolicy()" class="type-policy"></div>

            <div *ngIf="cpPresetColors && cpPresetColors.length" class="preset-area">
            <hr>

            <div class="preset-label">{{cpPresetLabel}}</div>

            <div *ngFor="let color of cpPresetColors" class="preset-color" [style.backgroundColor]="color" (click)="setColorFromString(color)"></div>
            </div>

            <div class="button-area">
                <button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="oKColor()">{{cpOKButtonText}}</button>
                <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="cancelColor()">{{cpCancelButtonText}}</button>
            </div>-->
        
        </div>
  `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IonicColorPicker),
        multi: true
    }]
})
export class IonicColorPicker {

}
