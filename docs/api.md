
## Functions

<dl>
<dt><a href="#flatMap">flatMap(fn, arr)</a></dt>
<dd><p>Map a function over an array and flatten the result by one level.</p>
</dd>
<dt><a href="#flatten">flatten(arr)</a> ⇒ <code><a href="#NonArray">NonArray</a></code> | <code><a href="#NonArray">Array.&lt;NonArray&gt;</a></code></dt>
<dd><p>Flatten an array of arbitrarily nested arrays
of elements into a flat array of elements.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#mapCallback">mapCallback</a> : <code>function</code></dt>
<dd><p>Callback for Array.prototype.map.</p>
</dd>
<dt><a href="#NonArray">NonArray</a> : <code>*</code></dt>
<dd><p>Anything expect an Array.</p>
</dd>
<dt><a href="#NestedStructure">NestedStructure</a> : <code><a href="#NonArray">NonArray</a></code> | <code><a href="#NestedStructure">Array.&lt;NestedStructure&gt;</a></code></dt>
<dd><p>An array-nested structure of (non-array) elements.</p>
</dd>
</dl>

<a name="flatMap"></a>

## flatMap(fn, arr)
Map a function over an array and flatten the result by one level.

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>[mapCallback](#mapCallback)</code> | 
| arr | <code>Array</code> | 

<a name="flatten"></a>

## flatten(arr) ⇒ <code>[NonArray](#NonArray)</code> &#124; <code>[Array.&lt;NonArray&gt;](#NonArray)</code>
Flatten an array of arbitrarily nested arrays
of elements into a flat array of elements.

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>[NestedStructure](#NestedStructure)</code> | 

<a name="mapCallback"></a>

## mapCallback : <code>function</code>
Callback for Array.prototype.map.

**Kind**: global typedef  
<a name="NonArray"></a>

## NonArray : <code>\*</code>
Anything expect an Array.

**Kind**: global typedef  
<a name="NestedStructure"></a>

## NestedStructure : <code>[NonArray](#NonArray)</code> &#124; <code>[Array.&lt;NestedStructure&gt;](#NestedStructure)</code>
An array-nested structure of (non-array) elements.

**Kind**: global typedef  
