<template>
    <component :is=tagType>
        <span class="font-textcards font-bold" v-if="shapeKind == 'chars'">
          <span class="card-text uppercase" v-bind:class="[suitColorClass]" v-if="card">{{valueIcon}} {{suitIcon}}</span>
        </span>
        <span class="font-cards" v-if="shapeKind == 'cards'">
          <span class="text-transparent" v-if="missingPlaceholder && !card">{{cardUnicode('hidden')}}</span>
          <span v-bind:class="[suitColorClass]" v-if="card">{{cardUnicode(card.card_id)}}</span>
        </span>
    </component>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
  props: {
    card: {
        required: false,
        type: [Object, null],
        default: null
    },
    missingPlaceholder: {
      required: false,
      type: Boolean,
      default: false
    },
    tagType: {
      required: false,
      type: String,
      default: 'p'
    },
    shapeKind: {
        type: String,
        default: 'chars'
    }
  },
  methods: {
      cardUnicode(card_id) {
          return GameHelpers.cardUnicode(card_id);
      },
      onClickCard(card) {
          this.$emit('onClickCard', card);
      }
  },
  computed: {
      suitColorClass: function() {
          const { card } = this;
          if (!card) return '';
          return GameHelpers.suitColor(card.suit);
      },
      suitIcon: function() {
          return GameHelpers.suitIcon(this.card.suit);
      },
      valueIcon: function() {
          return GameHelpers.cardValueIcon(this.card.value);
      }
  }
}

</script>
