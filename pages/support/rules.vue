<template>
    <div class="content is-medium">
        <div class="block has-text-centered has-text-weight-bold">
            <p class="title is-2">Support</p>
            <p class="subtitle is-3">Hand Editor Rules</p>
            <hr class="hr">
        </div>
        <div class="block">
            <h3>Random hands by custom rules</h3>
            <p>
                When creating a new game is possible to create random hands using user-defined rules.
                This is very useful to test your play on a certain type of hands, re-play hands or some variations, pratice with bidding, experiment new conventions.
            </p>
            <p>These rules are defined through special formulas to place constraints on the random generation of hands.</p>
            <p><em>An example of rule:</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            north.clubs(4).diamonds(2,5).hearts(3,+A,-J10)<br />
            south.clubs(2).diamonds(+K95)
            </blockquote>
            <p>As seen from the example above, every single formula starts always with the player name, followed by the suit and different parameters.</p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            &lt;player&gt;.&lt;suit&gt;(&lt;parameter one&gt;, &lt;parameter two&gt;, etc.)
            </blockquote>
            <p>Every formula can handle 3 categories of parameters to define:</p>
            <ol class="is-italic has-text-weight-bold">
                <li>Suit length</li>
                <li>Suit cards to include</li>
                <li>Suit cards to exclude</li>
            </ol>

            <h3>Suit length</h3>
            <p>A formula can define a precise number of cards a suit must hold, using a single numerical parameter:</p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            &lt;player&gt;.&lt;suit&gt;(&lt;number of cards&gt;)
            </blockquote>
            <p><em>Example (North must have 4 cards of hearts):</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            north.hearts(4)
            </blockquote>
            <p>In this way is possible to restrict the hands of every player to a given distribution.</p>
            <p><em>Example (West must have a balanced distribution 4333):</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            west.clubs(3).diamonds(3).hearts(4).spades(3)
            </blockquote>

            <h3>Suit length based on a range interval</h3>
            <p>
                A formula can define a minimum and a maximum number of suit cards
                using two numerical parameters (the minimum and the maximum of the specified range):
            </p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            &lt;player&gt;.&lt;suit&gt;(&lt;minimum&gt;, &lt;maximum&gt;)
            </blockquote>
            <p><em>Example (West must have a random number between 2 and 6 cards of spades):</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            west.spades(2,6)
            </blockquote>

            <h3>Cards of suit to include and/or exclude</h3>
            <p>The rules have formulas to define a range of cards a suit must have, as well as a range of cards it to not have.</p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            &lt;player&gt;.&lt;suit&gt;(+&lt;cards to include&gt;, -&lt;cards to exclude&gt;)
            </blockquote>
            <p><em>Example (East must have AJ83 clubs, south must not have K6 hearts, west must include the hearts cards AQ with 1098 excluded):</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            east.clubs(+AJ83)<br />
            south.hearts(-K6)<br />
            west.hearts(+AQ,-1098)
            </blockquote>

            <h3>Suit placeholders</h3>
            <p>
                Instead of seeds, can be used the placeholders x, y, t, z to randomize the association between formulas and seeds.
                In other words, every of these variables will be randomly assigned to a suit (for example x=spades, y=diamonds, z=clubs, t=hearts).
            </p>
            <p><em>Example:</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            north.x(5,+AK).y(3).t(3).z(2,-AKJQ)<br />
            south.x(4,+Q).y(3).t(3).z(3,-AKJQ)
            </blockquote>

            <h3>Let's put it all together</h3>
            <p>All these formulas can be combined together to create random custom hands very quickly and effectively. Here are some examples to make you understand better.</p>
            <p><em>Example (West and East have random balanced hands 4333 and 5332):</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            east.x(4).y(3).t(3).z(3)<br />
            west.x(5).y(3).t(3).z(2)
            </blockquote>
            <p><em>Example (North and South having trump 7+3 cards):</em></p>
            <blockquote class="mono-font has-text-weight-bold is-size-6">
            north.x(+754).y(+K643).z(+J65).t(+J74)<br />
            south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)<br />
            east.x(+2).y(+10852).z(+AKQ2).t(+Q652)
            </blockquote>
        </div>
    </div>
</template>

<script>

export default {
    layout: 'support',
    data: function() {
        return {
            sections: [
                'Hand Editor Rules'
            ]
        }
    }
}
</script>
