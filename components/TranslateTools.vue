<template>
  <div class="column">
    <b-field label="原軸">
      <b-input type="textarea" v-model="originalText" height="200"></b-input>
    </b-field>

    <b-button type="is-primary" expanded @click="translate">Translate</b-button>

    <b-field label="Translated & Formatted" style="margin-top: 2em;">
      <pre>{{ translatedText }}</pre>
    </b-field>
    <b-button type="is-success" v-if="translatedText.length > 0" @click="copy(translatedText)">Copy</b-button>
    <b-field label="For Discord" style="margin-top: 2em;">
      <pre>{{ dcText }}</pre>
    </b-field>
    <b-button type="is-success" v-if="dcText.length > 0" @click="copy(dcText)">Copy</b-button>
  </div>
</template>

<script>
export default {
  name: "TranslateTools",
  data() {
    return {
      originalText: "",
      translatedText: "",
      dcText: "",
      data: undefined
    };
  },
  methods: {
    async translate() {
      if (this.originalText.length == 0) {
        this.$buefy.toast.open({
          message: "Please input text",
          type: "is-danger",
          position: "is-bottom"
        });
        return;
      }
      const loadingComponent = this.$buefy.loading.open()
      var response1 = await this.$fetcher.post("/api/pcr/getNameList", {});
      this.data = response1.data;
      loadingComponent.close()

      let copyText = this.originalText;
      copyText = copyText.replaceAll("オート", "Auto ");
      copyText = copyText.replaceAll("オフト", "off");
      copyText = copyText.replaceAll("オン", "on");
      copyText = copyText.replaceAll("解除", "Off");
      copyText = copyText.replaceAll("目押しなし", "0目押");
      copyText = copyText.replaceAll("セット", "set");
      copyText = this.FullToHalf(copyText);

      for (let item of this.data) {
        copyText = copyText.replaceAll(item.name, item.nickname)
      }


      let text = copyText.split("\n");
      let startLine = 0;
      for (let i = 0; i < text.length; i++) {
        let splitLine = text[i].split(/\s+/);
        console.log(splitLine);
        if (splitLine.length > 1) {
          if (splitLine[0].includes(":")) {
            startLine = i;
            break;
          }
        }
      }

      let newText = "```scheme\n";
      for (let i = 0; i < text.length; i++) {
        if (i == startLine) newText += "\n";
        if (i < startLine) {
          newText += text[i] + "\n";
        } else {
          let splitLine = text[i].split(/\s+/);
          if (splitLine.length > 2) {
            if (splitLine[0].includes(":")) {
              let otherText = "";
              for (let j = 2; j < splitLine.length; j++) {
                otherText = otherText + " " + splitLine[j];
              }
              text[i] = `[${splitLine[0]}]\t${splitLine[1].padEnd(5, "　")}${otherText}`;
            }
          } else {
            text[i] = "\t" + text[i];
          }

          newText += text[i] + "\n";
        }

      }
      newText += "```" + "\n";
      this.translatedText = copyText;
      this.dcText = newText;
      console.log(this.data);
    },
    copy(text) {
      navigator.clipboard.writeText(text);
      this.$buefy.toast.open({
        message: "Copied",
        type: "is-success",
        position: "is-bottom"
      });
    },
    FullToHalf(str) {
      let kanaMap = {
        "。": "｡", "「": "｢", "」": "｣", "・": "･",
        "　": " "
      };
      let reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
      return str.replace(reg, function (s) {
        return kanaMap[s];
      }).replace(/゛/g, 'ﾞ').replace(/゜/g, 'ﾟ');
    }

  },

};
</script>