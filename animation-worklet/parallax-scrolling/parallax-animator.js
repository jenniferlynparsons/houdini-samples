/*
Copyright 2016 Google, Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
registerAnimator('parallax', class ParallaxAnimator {
  static get elements() { return [
    {name: 'background', inputProperties: [], outputProperties: ['transform']}]; }
  static get timelines() { return [
    {type: 'scroll', options: {orientation: 'vertical'}}]}

  animate(elementMap, timelines) {
    elementMap.get('background').forEach(elem => {
      elem.outputStyleMap.set('transform', new CSSTransformValue([
        new CSSTranslation(new CSSSimpleLength(0, 'px'),
                           new CSSSimpleLength(-200 * timelines[0].currentTime, 'px'))]));
    });
  }

});