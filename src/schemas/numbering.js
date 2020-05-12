const generateNumberingXMLTemplate = () => {
  return `
        <?xml version="1.0" encoding="UTF-8" standalone="yes"?>

        <w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
            <w:abstractNum w:abstractNumId="1">
                <w:nsid w:val="FFFFFF7F" />
                <w:multiLevelType w:val="singleLevel" />
                <w:lvl w:ilvl="0">
                    <w:start w:val="1" />
                    <w:numFmt w:val="decimal"/>
                    <w:lvlText w:val="%1." />
                    <w:lvlJc w:val="left" />
                    <w:pPr>
                        <w:tabs>
                            <w:tab w:val="num" w:pos="720" />
                        </w:tabs>
                        <w:ind w:left="720" w:hanging="360" />
                    </w:pPr>
                </w:lvl>
            </w:abstractNum>
            <w:abstractNum w:abstractNumId="2">
                <w:nsid w:val="FFFFFF7F" />
                <w:multiLevelType w:val="singleLevel" />
                <w:lvl w:ilvl="0">
                    <w:start w:val="1" />
                    <w:numFmt w:val="bullet"/>
                    <w:lvlText w:val="%1" />
                    <w:lvlJc w:val="left" />
                    <w:pPr>
                        <w:tabs>
                            <w:tab w:val="num" w:pos="720" />
                        </w:tabs>
                        <w:ind w:left="720" w:hanging="360" />
                    </w:pPr>
                </w:lvl>
            </w:abstractNum>
        </w:numbering>
    `;
};

export default generateNumberingXMLTemplate;
