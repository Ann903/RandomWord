/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : 127.0.0.1:3306
 Source Schema         : work

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 01/06/2020 22:04:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for rand
-- ----------------------------
DROP TABLE IF EXISTS `rand`;
CREATE TABLE `rand` (
  `id` int(11) NOT NULL,
  `data` varchar(255) NOT NULL,
  `from` varchar(255) DEFAULT NULL,
  `time` datetime NOT NULL DEFAULT '2020-05-20 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rand
-- ----------------------------
BEGIN;
INSERT INTO `rand` VALUES (0, '安安安安', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (1, 'lines', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (2, '说不出来为什么爱你，但我知道，你就是我不爱别人的理由', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (3, '我们都还年轻，你也才高三，怎么就想结婚了呢?我是碰到你之后才想结婚的。', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (4, '你是不是一定要嫁个有钱人', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (5, '我二十岁，你终于来了，人山人海中我抓住你了', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (6, '我在想，我要有多幸运啊，能在这个时候遇见你', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (7, '我一点都不担心你错过我的青春，青春不过短短几年，而我的余生很长很长', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (8, '我不怕别人说我为爱情卑微至此，我只怕向你表达爱意太少让你受了冷落，但又怕表达太多让你受到束缚。', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (9, '如果有眼睛而不能见你，那么还是让它瞎了吧，有耳朵而不能听见你的声音，那么还是让它聋了吧，多少也安静一点。只要', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (10, '让心不要死去，因为它还能想你。', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (11, '我想和你一起生活，在某个小镇，共享无尽黄昏，和绵绵不绝的钟声。', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (12, '没有一劳永逸的开始', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (13, '生活需要微笑，是微笑让这个世界变得更加温暖', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (14, '能原谅女人谎言的才是真正的男人', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (15, '斯人若彩虹，遇上方知有', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (16, '安宇航俺喜欢你', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (17, '保证再也不惹你生气了', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (18, '就喜欢你一个！我保证', NULL, '2020-05-20 00:00:00');
INSERT INTO `rand` VALUES (19, '早也不马扁你了', NULL, '2020-05-20 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
