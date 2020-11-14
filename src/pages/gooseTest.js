import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.MenuTech />
		<Components.TitleMain>
			<Override slot="text">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Задание 2.  Проверка теории
				</Strong>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					{"  "}
					<br />
					{"\n\n\n"}
				</Span>
			</Override>
		</Components.TitleMain>
		<Components.Track>
			<Override slot="image" src="https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/2.svg?v=2020-11-14T18:22:16.973Z" />
		</Components.Track>
		<Section height="257px" margin="10px 0 0 0">
			<Text font="20px sans-serif">
				<Strong>
					1) Как расшифровывается аббревиатура IED?
				</Strong>
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Информационно электронное реле
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Интеллектуальное устройство учета
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Интеллектуальное электронное устройство
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Международный энергетический департамент
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				2) Какие сетевые настройки IED влияют на передачу GOOSE-сообщений?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					MAC-адрес и IP-адрес
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					IP-адрес и VLAN
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					MAC-адрес и APPID
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Все вместе
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				3) К какому механизму передачи данных относятся GOOSE-сообщения?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Клиент-сервер
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Master-slave
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Издатель-подписчик
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Точка-точка
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				4) Какие первоначальные четыре октета MAC-адреса зарезервировано за ТК57 МЭК?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					01:0D:BB:01
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					00:0С:ВB:01
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					01:0С:CD:04
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					01:0C:CD:01
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				5) В каком диапазоне можно задавать VLAN для устройств, обменивающихся GOOSE сообщении?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					0-9999
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					0-4095
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					0-1000
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					0-512
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				6) В какой главе серии стандартов МЭК 61850 описывается механизм передачи GOOSE сообщений?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					МЭК 61850-6
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					МЭК 61850-7-4
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					МЭК 61850-8-1
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					МЭК 61850-9-2
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="155px">
			<Text font="700 20px sans-serif">
				7) Можно ли задавать одинаковые MAC-адреса разным IED?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Да
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Нет
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				8) Как расшифровывается аббревиатура GOOSE?
			</Text>
			<StackItem width="54%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Общее объектно-ориентированное событие на подстанции
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Быстрое сообщение релейной защиты
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Никак не расшифровывается, это название птицы
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Сообщение для передачи объема данных в энергетике
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="205px">
			<Text font="700 20px sans-serif">
				9) К какому методу передачи трафика относится GOOSE-сообщения?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Unicast
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Broadcast
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Multicast
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				10) По какому интерфейсу передаются GOOSE-сообщения?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					RS-485
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					RS-422
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Ethernet
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					RS-232
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				11) Какое минимальное время между дублирующими GOOSE-сообщениями типа 1А может быть
установлено согласно «Корпоративному профилю МЭК 61850»?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					4мс
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					10мс
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					1мс
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					1 мкс
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				12) На каком уровне модели OSI передаются GOOSE-сообщения
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Канальный
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Транспортный
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Прикладной
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Сетевой
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				13) Как обозначается устройство на цифровой подстанции передающее/принимающее информации и
имеющее хотя бы один процессор?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					IED
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					LED
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					VMA
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					STP
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				14) На каком уровне передается информация посредством GOOSE-сообщений?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Кольцевой
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Горизонтальный
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Вертикальный
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					Сквозной
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="257px">
			<Text font="700 20px sans-serif">
				15) По какому механизму передачи данных работают GOOSE-сообщения?
			</Text>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" margin="10 0px 0px 0px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					TPAA
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					MCAA
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					P2P
				</Text>
				{"    "}
			</StackItem>
			<StackItem width="50%" display="flex" height="50px">
				<Override slot="StackItemContent" height="20px" />
				{"        "}
				<Components.Checkbox margin="10px 3px 3px 4px" />
				<Text
					font="--lead"
					margin="0px 0px 0px 10px"
					display="inline-block"
					width="100%"
					height="30px"
				>
					По всем перечисленным
				</Text>
				{"    "}
			</StackItem>
		</Section>
		<Section height="100px">
			<Override slot="SectionContent" height="100px" />
			<Components.BlueButton margin="60px 0px 0px 200px">
				<Link href="goose" color="#fff" text-decoration-line="initial">
					Ответить
				</Link>
			</Components.BlueButton>
		</Section>
		<Components.FooterTech />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});