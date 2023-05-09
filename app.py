import json
import base64
import io
from flask import Flask, render_template, request, jsonify, url_for
from wordcloud import WordCloud
from flask_cors import CORS

# 网站后端
app = Flask(__name__, static_url_path="")
app.config['JSON_AS_ASCII'] = False  # 禁止中文转义
# 允许来自于Vue的跨域访问请求
CORS(app, resources={r'/*': {'origins': '*'}}, supports_credentials=True)


# 真正调用词云库生成图片
def get_word_cloud(text):
    # font = "./SimHei.ttf"
    # pil_img = WordCloud(width=500, height=500, font_path=font).generate(text=text).to_image()
    pil_img = WordCloud(width=800, height=300, background_color="white").generate(text=text).to_image()
    img = io.BytesIO()
    pil_img.save(img, "PNG")
    img.seek(0)
    img_base64 = base64.b64encode(img.getvalue()).decode()
    return img_base64


@app.route('/test', methods=['GET'])
def test():
    return json.dumps('hello world!')


@app.route('/')
@app.route("/index")
def hello_world():
    return render_template("index.html")


@app.route('/word/generate', methods=["POST", "GET"])  # 生成词云图片接口，以base64格式返回
def cloud():
    text = request.json.get("word")
    res = get_word_cloud(text)
    return res


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)
