import * as React from 'react';

/*
 * Copyright 2020 Arkadip Bhattacharya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * React useInterval Hook
 * Used to integrate the power of setInterval seamlessly
 *
 * @param callback - The callback function
 * @param delay - The amount of delay in minutes.
 *
 * @returns the ref of setInterval
 */
function useInterval(callback, delay) {
    var savedCallback = React.useRef(callback);
    var intervalRef = React.useRef(null);
    // Remember the latest callback if it changes.
    React.useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    React.useEffect(function () {
        var tick = function () { return savedCallback.current(); };
        if (typeof delay === 'number') {
            intervalRef.current = window.setInterval(tick, delay * 60 * 1000);
        }
        return function () {
            if (intervalRef.current) {
                window.clearTimeout(intervalRef.current);
            }
        };
    }, [delay]);
    return intervalRef;
}

export { useInterval };
//# sourceMappingURL=hooks.js.map
